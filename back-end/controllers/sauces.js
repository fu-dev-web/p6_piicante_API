const Sauces = require('../models/Sauces');

exports.createSauce = (req, res, next)=>{
    delete req.body._id;
    const sauce = new sauce({
        ...req.body
    });
    Sauces.save()
        .then(()=> res.status(201).json({ message: "nouvelle sauce enregistré !"}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next)=>{
    Sauces.findOne({ _id: req.params.id})
        .then( Sauces => res.status(200).json({ Sauces }))
        .catch( error => res.status(404).json({ error }))
};

exports.modifySauce = (req, res, next)=>{
    Sauces.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
        .then(()=> res.status(200).json({message: 'sauce modifié !'}))
        .catch(()=> res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next)=>{
    Sauces.deleteOne({ _id: req.params.id })
        .then(()=> res.status(200).json({ message: 'Sauce supprimée !'}))
        .catch(()=> res.status(400).json({ error }));
};

exports.getAllSauces = (req, res, next)=>{
    Sauces.find()
        .then(Sauces => res.status(200).json(Sauces))
        .catch(error => res.status(400).json({ error }));
};