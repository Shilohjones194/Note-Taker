const path = require('path');
const router = require('express').Router();

//GET '*' should return all the index.html
router.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//GET /notes will return notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;