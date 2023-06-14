const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  console.log(newUser);
  return newUser;
};

const getAllUsers = async () => {
  const result = await User.findAll();

  const filteredUsers = result.map((person) => {
    const newPerson = {
      id: person.id,
      displayName: person.displayName,
      email: person.email,
      image: person.image,
    };

    return newPerson;
  });
  return filteredUsers;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };
};

module.exports = {
  getByEmail,
  create,
  getAllUsers,
  getById,
};
