const express = require('express');
const router = express.Router();
let dribbleController = require('../controllers/dribbbleController');

/* GET home page. */
router.get('/portfolio/', (req, res, next) => {
  dribbleController.getGallery(req, data => {
    res
      .json(data)
      .status(200)
      .end();
  });
});

router.get('/portfolio/tags', (req, res, next) => {
  dribbleController.getTags(data => {
    res
      .json(data)
      .status(200)
      .end();
  });
});

router.get('/portfolio/:id', (req, res, next) => {
  dribbleController.getImageById(req,data => {
    res
      .json(data)
      .status(200)
      .end();
  });
});

module.exports = router;
