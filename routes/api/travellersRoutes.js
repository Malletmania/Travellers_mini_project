const router = require('express').Router();
const { Trips, Location, Travellers } = require('../../models');

//Get all locations
router.get('/', async (req, res) => {
    try {
        const travellerData = await Travellers.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single location
router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Travellers.findByPk(req.params.id, {
        include: [{ model: Trips }, { model: Location }],
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No location is found' });
        return travellerData;
      }
      res.status(200).json(travellerData);
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
      const travellerData = await Trips.destroy({
          where: {
              id: req.params.id,
          }
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No Travellers found.' });
        return;
      }
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;