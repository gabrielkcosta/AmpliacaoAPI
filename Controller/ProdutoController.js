import { Produto } from "../model/Produto.js";
import {
  cadastrar,
  listar,
  buscarPorIndice,
  atualizar,
  deletar
} from "../repository/ProdutoRepository.js";

export function cadastrarProduto(req, res) {
  const { nome, preco, quantidade } = req.body;
  const novoProduto = new Produto(nome, preco, quantidade);
  cadastrar(novoProduto);
  return res.status(201).json(novoProduto);
}

export function listarProdutos(req, res) {
  const lista = listar();
  return res.status(200).json(lista);
}

export function buscarProdutoPorIndice(req, res) {
  const { indice } = req.params;
  const produto = buscarPorIndice(indice);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }

  return res.status(200).json(produto);
}

export function atualizarProduto(req, res) {
  const { indice } = req.params;
  const produtoExistente = buscarPorIndice(indice);

  if (!produtoExistente) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }

  const { nome, preco, quantidade } = req.body;

  const nomeAtualizado = nome !== undefined ? nome : produtoExistente.nome;
  const precoAtualizado = preco !== undefined ? preco : produtoExistente.preco;
  const qtdAtualizada = quantidade !== undefined ? quantidade : produtoExistente.quantidade;

  const produtoAtualizado = new Produto(nomeAtualizado, precoAtualizado, qtdAtualizada);
  atualizar(indice, produtoAtualizado);

  return res.status(200).json(produtoAtualizado);
}

export function deletarProduto(req, res) {
  const { indice } = req.params;
  const produtoExistente = buscarPorIndice(indice);

  if (!produtoExistente) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }

  deletar(indice);
  return res.status(204).send();
}