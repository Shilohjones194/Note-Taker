const router = require('express').Router();
const fs = require('fs');
const path = require("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
}
);

router.post('/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db/db.json'), 'utf8');
    let newNote = req.body;

    // setting unique ID for each note when saved
    let uniqueId = db.length.toString();
    newNote.id = uniqueId;
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), 'utf8', (err) => {
        if (err) throw err;
        console.log('file is saved');
    });
    res.json(db);
});


//Deleting api/Notes
router.delete('/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db/db.json'), 'utf8');
    let noteId = req.params.id;
    let makeId = 0;
    console.log(`Deleting note with id of ${noteId}`);
    // filters out note selected for deletion from the remaining notes without the same id
    db = db.filter((noteNow) => {
        return noteNow.id != noteId;
    });
    // loop through and renumber remaining notes
    for (noteNow of db) {
        noteNow.id = makeId.toString();
        makeId++;
    }
    // write new req.body back to db file
    fs.writeFileSync("./db/db.json", JSON.stringify(db), "utf8", (err) => {
        if (err) throw err;
        console.log("file has been saved");
    });
    res.json(db);
});
module.exports = router;