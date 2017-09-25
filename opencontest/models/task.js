'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
  });
  Task.associate = function(models) {
    Task.hasOne(models.Contest);
  };
  return Task;
};