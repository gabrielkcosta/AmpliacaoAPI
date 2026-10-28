import { Fornecedor } from "../model/Fornecedor.js";
import {
  cadastrar,
  listar,
  buscarPorIndice,
  atualizar,
  deletar
} from "../Repository/FornecedorRepostory.js";

export function cadastrarFornecedor(req, res) {
  const { nome, cnpj, telefone } = req.body;
  const novoFornecedor = new Fornecedor(nome, cnpj, telefone);
  cadastrar(novoFornecedor);
  return res.status(201).json(novoFornecedor);
}

export function listarFornecedores(req, res) {
  const lista = listar();
  return res.status(200).json(lista);
}

export function buscarFornecedorPorIndice(req, res) {
  const { indice } = req.params;
  const fornecedor = buscarPorIndice(indice);

  if (!fornecedor) {
    return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
  }

  return res.status(200).json(fornecedor);
}

export function atualizarFornecedor(req, res) {
  const { indice } = req.params;
  const fornecedorExistente = buscarPorIndice(indice);

  if (!fornecedorExistente) {
    return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
  }

  const { nome, cnpj, telefone } = req.body;

  const nomeAtualizado = nome !== undefined ? nome : fornecedorExistente.nome;
  const cnpjAtualizado = cnpj !== undefined ? cnpj : fornecedorExistente.cnpj;
  const telefoneAtualizado = telefone !== undefined ? telefone : fornecedorExistente.telefone;

  const fornecedorAtualizado = new Fornecedor(nomeAtualizado, cnpjAtualizado, telefoneAtualizado);
  atualizar(indice, fornecedorAtualizado);

  return res.status(200).json(fornecedorAtualizado);
}

export function deletarFornecedor(req, res) {
  const { indice } = req.params;
  const fornecedorExistente = buscarPorIndice(indice);

  if (!fornecedorExistente) {
    return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
  }

  deletar(indice);
  return res.status(204).send();
}