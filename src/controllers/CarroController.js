const carroService = require('../services/CarroService');

async function buscarTodos(req, res) {
    let json = {error:'', result:[]};

    let carros = await carroService.buscarTodos();

    // console.log(carros);

    for (let i in carros) {
        json.result.push({
            codigo: carros[i].codigo,
            descricao: carros[i].modelo
        })
    }
    res.json(json);
};

module.exports = {
    buscarTodos
};