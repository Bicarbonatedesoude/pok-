const Pokemon = require("../models/pokemon.model.js");

exports.trouverUnPokemon = (req, res) => {
    if (!req.params.id || parseInt(req.params.id) <= 0) {
        res.status(400);
        res.send({
            message: "L'id du Pokémon est obligatoire et doit être supérieur à 0"
        });
        return;
    }

    Pokemon.trouverUnPokemon(req.params.id)
    .then((pokemon) => {
        if (!pokemon[0]) {
            res.status(404);
            res.send({
                message: `Pokémon introuvable avec l'id ${req.params.id}`
            });
            return;
        }
        res.send(pokemon[0]);
    })
    .catch((erreur) => {
        console.error('Erreur : ', erreur);
        res.status(500);
        res.send({
            message: "Erreur lors de la récupération du Pokémon avec l'id " + req.params.id
        });
    });
};
