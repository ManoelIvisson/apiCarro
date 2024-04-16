const carroService = require('../services/CarroService');

async function buscarTodos(req, res) {
    let json = {error:'', result:[]};

    let carros = await carroService.buscarTodos();

    // console.log(carros);

    for (let i in carros) {
        json.result.push({
            id: carros[i].id,
            descricao: carros[i].modelo
        })
    }
    res.json(json);
};

async function buscarUm(req, res) {
    let json = {error:'', result:{}};

    let id = req.params.id;
    let carro = await carroService.buscarUm(id);

    if (carro) {
        json.result = carro;
    }

    res.json(json);
}

module.exports = {
    buscarTodos,
    buscarUm
};