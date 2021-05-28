const express = require('express');
//Testing from Module 11
// const { database } = require('./db/db.json');
//const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();
//Testing from module 11
// app.get('/api/db/db.json', (req, res) => {
//     res.json(database);
// });
​
//middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//app.use(require('./routes/apiRoutes.js));
//Need to require routes files
// require('./routes/apiRoutes.js')(app);
// require('./routes/htmlRoutes')(app);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
​
// Setup listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});