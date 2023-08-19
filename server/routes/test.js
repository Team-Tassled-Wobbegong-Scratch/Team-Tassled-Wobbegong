const express = require('express');
const router = express.Router();
//const FeedData = require('../models/catModel');
const testController = require('../controllers/testController.js');


router.post('/', testController.createCat, (req, res) => {
  return res.status(200).send('cat created')
});

router.delete('/', testController.deleteCat, (req, res) => {
  return res.status(200).send('Cat Removed')
});


  // router.delete('/', testController.deleteCat, (req, res) => {
  //   return res.status(200).send('all good');
  // });


module.exports = router;