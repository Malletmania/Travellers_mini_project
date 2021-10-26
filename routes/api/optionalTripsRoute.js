const router = require('express').Router();
const { Trips, Location, Travellers } = require('../../models');

// GET all drivers
router.post('/', async (req, res) => {
  try {
    const TravellersData = await Travellers.findAll({
      include: [{ model: Trips }, { model: Location }],
    });
    res.status(200).json(TravellersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Trips.findByPk(req.params.id, {
      include: [{ model: Trips }, { model: Location }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No trips found with that id!' });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
