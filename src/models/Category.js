module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { allowNull: false, autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  },);
  
  return Category;
};