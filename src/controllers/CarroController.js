const carroService = require('../services/CarroService');

async function buscarTodos(req, res) {
    let json = {error:'', result:[]};

    let carros = await carroService.buscarTodos();

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

async function inserir(req, res) {
    let json = {error:'', result:{}};

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (modelo && placa) {
        let CarroId = await carroService.inserir(modelo, placa);
        json.result = {
            id: CarroId,
            modelo: modelo,
            placa
        };
    } else {
        json.error = "Campos não preenchidos";
    }

    res.json(json);
}

async function alterar(req, res) {
    let json = {error:'', result:{}};

    let id = req.params.id;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (id && modelo && placa) {
        await carroService.alterar(id, modelo, placa);
        json.result = {
            id,
            modelo,
            placa
        }
    } else {
        json.error = "Campos não preenchidos ou incorretos";
    }

    res.json(json);
}

async function excluir(req, res) {
    let json = {error:'', result:{}};

    let id = req.params.id;

    json.result = await carroService.buscarUm(id)
    await carroService.excluir(id);

    res.json(json);
}

module.exports = {
    buscarTodos,
    buscarUm,
    inserir,
    alterar,
    excluir
};