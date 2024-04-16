const db = require('../db')

function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM carros', (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }

            aceito(results);
        })
    });
}

module.exports = {
    buscarTodos
}