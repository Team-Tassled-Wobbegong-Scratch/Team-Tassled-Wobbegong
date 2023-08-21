const express = require('express');
const router = express.Router();
//const FeedData = require('../models/catModel');
const catController = require('../controllers/catController.js');



router.get('/', catController.getCat, (req, res) => {
  return res.status(200).send(res.locals.cat);
});

router.post('/', catController.createCat, (req, res) => {
  return res.status(200).send('cat created');
});

router.delete('/', catController.deleteCat, (req, res) => {
  return res.status(200).send('Cat Removed');
});


  // router.delete('/', testController.deleteCat, (req, res) => {
  //   return res.status(200).send('all good');
  // });


module.exports = router;