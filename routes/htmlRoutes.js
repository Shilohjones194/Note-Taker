// const path = require('path');

// // ROUTING

// module.exports = (app) => {

//     app.get('/notes', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/notes.html'));
//     });
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     });
// }
const path = require('path');
const router = require('express').Router();

//GET /notes will return notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

//GET '*' should return all the index.html
router.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);


module.exports = router;