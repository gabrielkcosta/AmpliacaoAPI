import {Produto} from "../model/Produto.js"
import { atualizar, cadastrar, listar, deletar, buscarPorId  } from "../repository/produtoRepository.js"

export async function cadastrarProduto (req, res){
    try{
    const {descricao, preco, peso} = req.body;

    if(!descricao || !preco || !peso){
        return res.status(400).json({
            mensagem: "Descrição, preço e peso são obrigatórias"
        });
    }
    
    const produto = new Produto(descricao, preco, peso);

    const id = await cadastrar(produto);

    res.status(201).json({
        mensagem:"Produto cadastrado com sucesso",
        id_produto: id
    });
    }catch (erro){
        res.status(500).json({
            mensagem:"Erro ao cadastrar produto: " + erro
        })
    }
}

export async function listarProdutos (req, res){
    try{
    const listaDeProdutos = await listar();

    res.status(200).json(listaDeProdutos);
    }catch(erro){
        res.status(500).json({
            mensagem:"Erro ao listar produtos: " + erro
        })
    }
}

export async function BuscarProdutoPorId(req, res){
    try{
    const id = Number(req.params.id);

    const produto = await buscarPorId(id);

    if(!produto){
        return res.status(404).json({mensagem: "Produto não encontrado"})
    }

    res.status(200).json(produto);
    }catch(erro){
        res.status(500).json({
            mensagem:"Erro ao listar produto por ID: " + erro
        })
    }
}

export async function atualizarProduto (req, res){
    try{
    const id = Number(req.params.id);

    const produto = await buscarPorId(id);

    if(!produto){
        return res.status(404).json({mensagem: "Produto não encontrado"});
    }

    const {descricao, preco, peso} = req.body;

    if(descricao != undefined){
        produto.descricao = descricao;
    }

    if(preco != undefined){
        produto.preco = preco;
    }

    if(peso != undefined){
        produto.peso = peso;
    }

    const resultado = await atualizar(id,produto);

    if(resultado === 0){
        return res.status(404).json({
            mensagem:"Erro ao atualizar produto, nenhum produto atualizado"
        })
    }

    res.status(200).json({mensagem: "Produto atualizado com sucesso"})
    }catch(erro){
        return res.status(500).json({
            mensagem:"Erro ao atualizar produto: " + erro
        });
    }
}

export async function deletarProduto(req, res){
    try{
    const id = Number(req.params.id);

    const produto = await buscarPorId(id);

    if(!produto){
        return res.status(404).json({mensagem: "Produto não encontrato"});
    }

    const resultado = await deletar(id);

    if(resultado === 0){
        return res.status(404).json({mensagem: "Nenhum Produto deletado"});
    }

    res.status(204);
    }catch(erro){
        return res.status(500).json({mensagem: "Erro ao deletar produto: " + erro});
    }
}