const router = require('express').Router();
const Trips = require('./tripsRoutes');
const Location = require('./locationRoutes');
const Travellers = require('./travellersRoutes')

router.use('/Trips', Trips);
router.use('/Location', Location);
router.use('/Travellers', Travellers);

module.exports = router;
