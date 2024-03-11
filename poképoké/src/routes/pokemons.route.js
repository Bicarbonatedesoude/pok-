const express = require('express');
const router = express.Router();
const pokemonsController = require('../controllers/pokemons.controller');

router.get('/:id', (req, res) => {
    pokemonsController.trouverUnPokemon(req, res);
});

module.exports = router;
