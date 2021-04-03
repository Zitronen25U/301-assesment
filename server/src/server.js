'use strict';

// IMPORTS
// 
// 

require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const port=process.env.PORT

app.use(express.json());

app.use(express.urlencoded({extended:true}));

// 
// 
// FOLDER IMPORTS

const Data = require('./data.js');

app.get('/items', Data.getAllItems);


app.get('/items/:id', Data.getOneItem);


app.delete('/items/:id', Data.deleteOneItem);


app.put('/items/:id', Data.updateOneItem);

// 
// 
// Functions

app.post('/items', Data.addAnItem);


app.use('*', (req,res) => {
  res.status(404).send('These are not the droids you are looking for.');
});


app.use( (error,req,res,next) => {
  res.status(500).send(`My Bad ... ${error.message}`);
});

// 
// 
//  NO TOUCH

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};
