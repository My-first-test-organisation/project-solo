const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserChannel, Likee }) {
      // define association here
      // this.hasMany(UserChannel, { foreignKey: 'channelId' });
      // this.hasMany(Likee, { foreignKey: 'channelId' });
    }
  }
  Phone.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    img: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};
