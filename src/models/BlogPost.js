module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { allowNull: false, autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  },);

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  return BlogPost;
};