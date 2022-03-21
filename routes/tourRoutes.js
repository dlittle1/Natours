const express = require('express');

const tourController = require('../controllers/tourController');

const router = express.Router();
const { getAllTours, createTour, getOneTour, updateTour, deleteTour } =
  tourController;

// router.param('id', tourController.checkID);

router.route('/').get(getAllTours).post(tourController.checkBody, createTour);

router.route('/:id').get(getOneTour).patch(updateTour).delete(deleteTour);

module.exports = router;
