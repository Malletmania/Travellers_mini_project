const router = require('express').Router();
const { Trips, Location, Travellers } = require('../../models');

//Get all locations
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single location
router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{ model: Trips }, { model: Travellers }],
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location is found' });
        return locationData;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //create location
  router.post('/', async (req, res) => {
    try {
      const TravellersData = await Travellers.create(req.body);
      res.status(200).json(TravellersData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //delete location
  router.delete('/:id', async (req, res) => {
    try {
      const locationData = await Trips.destroy({
          where: {
              id: req.params.id,
          }
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No Location found.' });
        return;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;