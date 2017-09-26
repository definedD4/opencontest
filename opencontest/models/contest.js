'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contest = sequelize.define('Contest', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  });
  Contest.associate = function(models) {
    Contest.hasMany(models.Task);
  };
  return Contest;
};