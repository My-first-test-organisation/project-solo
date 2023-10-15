const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserPhone extends Model {
    static associate({ User, Phone }) {
      // this.belongsTo(User, { foreignKey: 'userId' });
      // this.belongsTo(Channel, { foreignKey: 'channelId' });
    }
  }
  UserPhone.init({
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
        model: 'Phones',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'UserPhone',
  });
  return UserPhone;
};
