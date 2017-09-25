'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('Session', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    }
  });
  Session.associate = function(models) {
    Session.belongsTo(models.User);
  };
  return Session;
};