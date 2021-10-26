const Travellers = require('./Travellers');
const Location = require('./Location');
const Trips = require('./Trips');

Travellers.belongsToMany(Location, {
    foreignKey: 'Trips',
    unique: false,
  });
  
Location.hasMany(Travellers, {
    foreignKey: 'Trips',
    unique: false,
  });

  module.exports = { Travellers, Location, Trips};

  //servin it up Garys way
  // is foreignKey correct?