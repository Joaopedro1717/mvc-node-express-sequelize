const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const UserController = require('./controllers/userController');

app.post('/users', async(req, res) => userController.createUser(req, res));

app.get('/users/:email', async (req, res) => userController.getUserByEmail(req, res));

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
})