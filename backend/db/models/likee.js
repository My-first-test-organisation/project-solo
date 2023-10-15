const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Likee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Channel }) {
      // define association here
      // this.belongsTo(User, { foreignKey: 'userId' });
      // this.belongsTo(Channel, { foreignKey: 'channelId' });
    }
  }
  Likee.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    channelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Channels',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Likee',
  });
  return Likee;
};
