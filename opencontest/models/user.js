'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    displayName: DataTypes.STRING
  });
  User.associate = function(models) {

  };
  return User;
};