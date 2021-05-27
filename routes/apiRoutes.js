const fs = require('fs');
const util = require('util');
const path = require("path");
const readFile = util.promisify(fs.readFile);

//Needs app.get // app.post // app.delete
module.exports = (app) => {

    app.get('/api/notes', (req,res) => {
        readFile(path.join(__dirname + '../db/db.json'),)
    })


    app.post('/api/notes', (req, res) => {
        readFile(path.join (__dirname + '/../db/db.json'),)
    })

    app.delete('api/notes/:id', function(req, res) {
        readFile(path.join(__dirname + '/../db/db.json'), )
    })
    
}