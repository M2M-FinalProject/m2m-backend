'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MatchDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MatchDetail.belongsTo(models.User, {foreignKey: 'UserId'});
      MatchDetail.belongsTo(models.Match, {foreignKey: 'MatchId'});
    }
  }
  MatchDetail.init({
    MatchId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MatchDetail',
  });
  return MatchDetail;
};