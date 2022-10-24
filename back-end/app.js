const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');

const Sauces = require('./models/Sauces');
const users = require('./models/users');

const routeSauces = require('./routes/routeSauces');
const routeUtilisateur = requitre('./routes/user')

mongoose.connect('mongodb+srv://fu-dev-wev-b:fuOCp6Piicante@cluster0.a8ec9dk.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //il faut laisser tous ces methodes la? car on nous demande POST, GET, PUT, DELETE
    next();
  });

app.use(bodyParser.json());

app.use('/api/sauces', routeSauces);
app.use('/api/auth', routeUtilisateur);


module.exports = app;