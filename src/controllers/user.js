const jwt = require('jsonwebtoken');

const userService = require('../services/User');

const { JWT_SECRET } = process.env;

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isNameValid = (name) => name.length >= 8;
const isEmailValid = (email) => email.match(validRegex);
const isPasswordValid = (password) => password.length >= 6;

const nameMessage = '"displayName" length must be at least 8 characters long';
const emailMessage = '"email" must be a valid email';
const passwordMessage = '"password" length must be at least 6 characters long';

module.exports = async (req, res) => {
  const { displayName, email, password } = req.body;

  if (!isNameValid(displayName)) { return res.status(400).json({ message: nameMessage }); }
  
  if (!isEmailValid(email)) { return res.status(400).json({ message: emailMessage }); }

  if (!isPasswordValid(password)) { return res.status(400).json({ message: passwordMessage }); }

  const user = await userService.getByEmail(email);
  console.log(user);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const result = await userService.create(displayName, email, password, req.body.image);

  console.log(result);
  const payload = {
    email: req.body.email,
    admin: false,
  };
  
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  
  res.status(201).json({ token });
};