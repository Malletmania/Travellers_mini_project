const Travellers = require('./Travellers');
const Location = require('./Location');
const Trips = require('./Trips');

Travellers.belongsToMany(Location, {
    through: {model: Trips},
    // foreignKey: 'Trips',
    unique: false,
  });
  
Location.belongsToMany(Travellers, {
    through: {model: Trips},
    // foreignKey: 'Trips',
    unique: false,
  });

  module.exports = { Travellers, Location, Trips};

  