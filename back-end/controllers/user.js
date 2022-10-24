const bcrypt = require('bcrypt');
const jwt = require('jsonwetoken')

const user = require('../models/users');

exports.signup = (req, res, next) =>{
    // haché le mdp
    bcrypt.hash(req.body.password, 10)
        .then( hash => {
            const user = new user({
                email: req.body.email,
                password: hash
            })
            user.save()
                .then(()=> res.status(201).json({ message: "utilisateur créé !"}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) =>{
    user.findOne({email: req.body.email})
        .then(user => {
            if (!user){
                return res.status(401).json({ message: 'Paire indentiant/mot de passe incorrecte'});
            }else {
               bcrypt.compare(req.body.password, user.password)
                    .then(valid =>{
                        if (!valid){
                           return res.status(401).json({message: 'Paire indentiant/mot de passe incorrecte'})
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    { userId: user._id},
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                )
                            });
                        }
                    })
                    .then(error => {
                        res.status(500).json({ error })
                    })     
            }
        })
        .catch(error => { 
            res.status(500).json({ error });
        })
};