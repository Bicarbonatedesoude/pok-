const sql = require("../config/db.js");

class Pokemon {
    static trouverUnPokemon(id) {
        return new Promise((resolve, reject) => {
            const requete = `SELECT * FROM pokemon WHERE id = ?`;
            const params = [id];

            sql.query(requete, params, (erreur, resultat) => {
                if (erreur) {
                    reject(erreur);
                } else {
                    resolve(resultat);
                }
            });
        });
    }
}

module.exports = Pokemon;
