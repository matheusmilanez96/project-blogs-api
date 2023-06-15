const { BlogPost, User, Category } = require('../models');

// const create = async (title, content) => {
//   const newPost = await BlogPost.create({ title, content });
//   return newPost;
// };

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  console.log(result);
  return result;
};

module.exports = {
  getPosts,
};
