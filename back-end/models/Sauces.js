const mongoose = require('mongoose');
const app = require('../app');


// créer un schéma de données pour votre base de données MongoDB.
const saucesSchema = mongoose.Schema({
    title: { type: String, required: true},
    name: {type: String, require: true},
    manufacturer: {type: String, require: true},
    description: {type: String, require: true},
    heat: {type: Number, require: true},
    likes: {type: Number, require: true},
    dislikes: {type: Number, require: true},
    imageUrl: {type: String, require: true},
    mainPepper: {type: String, require: true},
    // les deux suivant, j'suis pas sure que se soit un tableau, VERIFIER !!!!
    // usersLiked: {typet: Array, require: true},
    // usersDisliked: {typet: Array, require: true},
    userId: {type: String, require: true},
});

// transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('Sauce', saucesSchema);
