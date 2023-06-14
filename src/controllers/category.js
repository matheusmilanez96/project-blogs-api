const categoryService = require('../services/Category');

const isNameValid = (name) => name.length >= 1;

const nameMessage = '"name" is required';

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) { return res.status(400).json({ message: nameMessage }); }
  if (!isNameValid(name)) { return res.status(400).json({ message: nameMessage }); }

  const result = await categoryService.create(name);

  res.status(201).json(result);
};

module.exports = {
  addCategory,
};