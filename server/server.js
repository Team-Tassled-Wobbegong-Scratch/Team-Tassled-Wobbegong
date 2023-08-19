const path = require('path');
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const app = express();
const PORT = 3000; 
const dbConnect = require('./db.js');

// HANDLE PARSE, FORM DATA, AND CORS //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dbConnect();

// ROUTERS //
const feedRouter = require('./routes/feed.js');

// ADD & DELETE >>TEST << ROUTE //
const testRouter = require('./routes/test')
app.use('/api/test', testRouter);

// DEFINE ROUTE HANDLERS //
app.use('/api/feed', feedRouter);

// HANDLE STATIC FILES //
app.use(express.static(path.resolve(__dirname, '../build')));

// Global 404 handler
app.use('*', (req, res) => {
  res.status(404).send('File not found');
})

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

  
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));