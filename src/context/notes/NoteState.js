import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6683df055cb34a43dfd3e6de",
          "user": "6682e319f039d1704df00aa7",
          "title": "kuch bhi likh de",
          "description": "kuch bhi ke bare me likh de, aur kuch aur bhi",
          "tag": "iska bhi m hi btau ke ab",
          "date": "2024-07-02T11:05:41.182Z",
          "__v": 0
        },
        {
          "_id": "6683df535cb34a43dfd3e6e0",
          "user": "6682e319f039d1704df00aa7",
          "title": "kuch bhi likh de",
          "description": "kuch bhi ke bare me likh de, aur kuch aur bhi",
          "tag": "iska bhi m hi btau ke ab",
          "date": "2024-07-02T11:06:59.570Z",
          "__v": 0
        },
        {
          "_id": "6686a3b9650f5fb8473b4fa20",
          "user": "6682e319f039d1704df00aa7",
          "title": "DSA  is must",
          "description": "DSA is compulsory for cracking good company",
          "tag": "good company tips",
          "date": "2024-07-04T06:05:10.020Z",
          "__v": 0
        },
        {
          "_id": "668c1195207de9af89c231de6",
          "user": "6682e319f039d1704df00aa7",
          "title": "MeritShot Drive",
          "description": "Today is my MeritShot drive",
          "tag": "Placement",
          "date": "2024-07-08T16:19:33.028Z",
          "__v": 0
        },
        {
            "_id": "6683df055cb3a4a43dfd3e6de",
            "user": "6682e319f039d1704df00aa7",
            "title": "kuch bhi likh de",
            "description": "kuch bhi ke bare me likh de, aur kuch aur bhi",
            "tag": "iska bhi m hi btau ke ab",
            "date": "2024-07-02T11:05:41.182Z",
            "__v": 0
          },
          {
            "_id": "6683df535cb34a4a3dfd3e6e0",
            "user": "6682e319f039d1704df00aa7",
            "title": "kuch bhi likh de",
            "description": "kuch bhi ke bare me likh de, aur kuch aur bhi",
            "tag": "iska bhi m hi btau ke ab",
            "date": "2024-07-02T11:06:59.570Z",
            "__v": 0
          },
          {
            "_id": "66a863b9650f5fb8473b4fa20",
            "user": "6682e319f039d1704df00aa7",
            "title": "DSA  is must",
            "description": "DSA is compulsory for cracking good company",
            "tag": "good company tips",
            "date": "2024-07-04T06:05:10.020Z",
            "__v": 0
          },
          {
            "_id": "668c11952a07de9f89c231de6",
            "user": "6682e319f039d1704df00aa7",
            "title": "MeritShot Drive",
            "description": "Today is my MeritShot drive",
            "tag": "Placement",
            "date": "2024-07-08T16:19:33.028Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;