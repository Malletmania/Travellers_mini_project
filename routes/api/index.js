const router = require('express').Router();
const optionalTrips = require('./optionalTripsRoute');

router.use('/drivers', optionalTrips);

module.exports = router;
