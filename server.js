const express = require('express');
//Testing from Module 11
// const { database } = require('./db/db.json');
//const fs = require('fs');


const PORT = process.env.PORT || 3001;
const app = express();
//Testing from module 11
// app.get('/api/db/db.json', (req, res) => {
//     res.json(database);
// });

//middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Need to require routes files
require('./routes/routes')(app);
// Setup listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});