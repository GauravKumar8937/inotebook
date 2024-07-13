const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Route 1 : Get all the Notes using GET "api/auth/fetchallnotes". login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
// Route 2 : Get all the Notes using GET "api/auth/addnote". login required
router.post('/addnote', fetchuser, [
  body('title', "Enter the valid title").isLength({min:3}),
  body('description', "Description must be atleast 5 characters").isLength({min : 5})
], async (req, res)=>{
  try {
    // use destructures to fetch data from req.body
    const {title, description, tag} = req.body;
    // validationResult for check error 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()})
    }
    // note make a promise note.save()
    const note = new Notes({
      title, description, tag, user : req.user.id
    })
    const savedNote = await note.save()
    res.json(savedNote)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
})

// Route 3 : Update an existing Note using : PUT "/api/notes/updatenote/:id". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
  // Create a newNote object
  const newNote = {};
  if (title) { newNote.title = title };
  if (description) { newNote.description = description };
  if (tag) { newNote.tag = tag };

  // Find the note to be updated and update it
  let note = await Notes.findById(req.params.id);
  if (!note) { return res.status(404).send("Not Found") }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed")
  }
  note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
  res.json({note});
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
}
});

// Route 4 : delete an existing Note using : DELETE "/api/notes/deletenote/:id". Login Required
  router.delete('/deletenote/:id', fetchuser, async(req, res)=>{
    // Find the note which we want to delete 
    try {
      let note = await Notes.findById(req.params.id);
      if(!note) {return res.status(404).send("Not Found")}
      if(note.user.toString()!=req.user.id){
        return res.status(401).send("Not Allowed")
      }
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({"success" : "notes is successfully deleted" ,note : note})
    } catch (error) {
      return res.status(500).send("Internal Server Error")
    }
    
  })

module.exports = router;
