const { Category } = require('../models');

const create = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = {
  create,
  getAllCategories,
};
