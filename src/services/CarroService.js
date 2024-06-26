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

function buscarUm(id) {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }

            if (results.length >= 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        })
    })
}

function inserir(modelo, placa) {
    return new Promise((aceito, rejeitado) => {
        db.query(`INSERT INTO carros (modelo, placa) VALUES (?, ?)`, [modelo, placa], (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }
            aceito(results.insertId);
        })
    })
}

function alterar(id, modelo, placa) {
    return new Promise((aceito, rejeitado) => {
        db.query('UPDATE carros SET modelo = ?, placa = ? WHERE id = ?', [modelo, placa, id], (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }
            aceito(results);
        })
    })
}

function excluir(id) {
    return new Promise((aceito, rejeitado) => {
        db.query('DELETE FROM carros WHERE id = ?', [id], (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }
            aceito(results);
        })
    }) 
}

module.exports = {
    buscarTodos,
    buscarUm,
    inserir,
    alterar,
    excluir
}