const jwt = require('jsonwebtoken');

const userService = require('../services/User');

const { JWT_SECRET } = process.env;

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await userService.getByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const payload = {
    email: req.body.email,
    admin: false,
  };
  
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  
  res.status(200).json({ token });
};