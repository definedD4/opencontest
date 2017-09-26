'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING
  });
  Task.associate = function(models) {
    Task.belongsTo(models.Contest);
  };
  return Task;
};