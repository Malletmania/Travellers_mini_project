const router = require('express').Router();
const {Trips} = require('../../models');

//post
  router.post('/', async (req, res) => {
    try {
      const TripsData = await Trips.create(req.body);
      res.status(200).json(TripsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //delete location
  router.delete('/:id', async (req, res) => {
    try {
      const TripsData = await Trips.destroy({
          where: {
              id: req.params.id,
          }
      });
  
      if (!TripsData) {
        res.status(404).json({ message: 'No Trips found.' });
        return;
      }
      res.status(200).json(TripsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;