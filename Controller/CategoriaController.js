import { Categoria } from "../model/Categoria.js";
import {
  cadastrar,
  listar,
  buscarPorIndice,
  atualizar,
  deletar
} from "../repository/CategoriaRepository.js";

export function cadastrarCategoria(req, res) {
  const { nome, descricao } = req.body;
  const novaCategoria = new Categoria(nome, descricao);
  cadastrar(novaCategoria);
  return res.status(201).json(novaCategoria);
}

export function listarCategorias(req, res) {
  const lista = listar();
  return res.status(200).json(lista);
}

export function buscarCategoriaPorIndice(req, res) {
  const { indice } = req.params;
  const categoria = buscarPorIndice(indice);

  if (!categoria) {
    return res.status(404).json({ mensagem: "Categoria não encontrada!" });
  }

  return res.status(200).json(categoria);
}

export function atualizarCategoria(req, res) {
  const { indice } = req.params;
  const categoriaExistente = buscarPorIndice(indice);

  if (!categoriaExistente) {
    return res.status(404).json({ mensagem: "Categoria não encontrada!" });
  }

  const { nome, descricao } = req.body;

  const nomeAtualizado = nome !== undefined ? nome : categoriaExistente.nome;
  const descricaoAtualizada = descricao !== undefined ? descricao : categoriaExistente.descricao;

  const categoriaAtualizada = new Categoria(nomeAtualizado, descricaoAtualizada);
  atualizar(indice, categoriaAtualizada);

  return res.status(200).json(categoriaAtualizada);
}

export function deletarCategoria(req, res) {
  const { indice } = req.params;
  const categoriaExistente = buscarPorIndice(indice);

  if (!categoriaExistente) {
    return res.status(404).json({ mensagem: "Categoria não encontrada!" });
  }

  deletar(indice);
  return res.status(204).send();
}