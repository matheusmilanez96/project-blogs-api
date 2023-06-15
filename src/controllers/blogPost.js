const blogPostService = require('../services/BlogPost');
const userService = require('../services/User');

// const missingMessage = 'Some required fields are missing';

const getUserId = async (req) => {
  const { email } = req.user;

  const user = await userService.getByEmail(email);

  return user.id;
};

// const addPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;

//   const userId = await getUserId(req);

//   console.log(userId);

//   if (!title || !content || !categoryIds) {
//     return res.status(400).json({ message: missingMessage });
//   }

//   const result = await blogPostService.create(title, content);

//   res.status(201).json(result);
// };

const getAllPosts = async (req, res) => {
  const userId = await getUserId(req);

  const posts = await blogPostService.getPosts(userId);
  res.status(200).json(posts);
};

module.exports = {
  getAllPosts,
};