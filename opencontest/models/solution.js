'use strict';
module.exports = (sequelize, DataTypes) => {
  var Solution = sequelize.define('Solution', {
    lang: DataTypes.STRING,
  });
  Solution.associate = function(models) {
    Solution.belongsTo(models.User);
    Solution.belongsTo(models.Task);
  };
  return Solution;
};