const express = require('express');

const controllers = require('./controllers');
const validateToken = require('./middlewares/validateToken');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', controllers.login);
app.post('/user', controllers.user.addUser);
app.get('/user', validateToken, controllers.user.getAllUsers);
app.get('/user/:id', validateToken, controllers.user.getUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
