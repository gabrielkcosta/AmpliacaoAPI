import { Categoria } from "../model/Categoria.js";
import {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    deletar
} from "../repository/CategoriaRepository.js";

export async function cadastrarCategoria(req, res) {
    try {
        const { nome, descricao } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({
                mensagem: "Nome e descrição são obrigatórios"
            });
        }

        const novaCategoria = new Categoria(nome, descricao);
        const id = await cadastrar(novaCategoria);

        return res.status(201).json({
            mensagem: "Categoria cadastrada com sucesso",
            id_categoria: id
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar categoria: " + erro
        });
    }
}

export async function listarCategorias(req, res) {
    try {
        const lista = await listar();
        return res.status(200).json(lista);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar categorias: " + erro
        });
    }
}

export async function buscarCategoriaPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const categoria = await buscarPorId(id);

        if (!categoria) {
            return res.status(404).json({ mensagem: "Categoria não encontrada!" });
        }

        return res.status(200).json(categoria);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar categoria por ID: " + erro
        });
    }
}

export async function atualizarCategoria(req, res) {
    try {
        const id = Number(req.params.id);
        const categoriaExistente = await buscarPorId(id);

        if (!categoriaExistente) {
            return res.status(404).json({ mensagem: "Categoria não encontrada!" });
        }

        const { nome, descricao } = req.body;

        if (nome !== undefined) {
            categoriaExistente.nome = nome;
        }
        if (descricao !== undefined) {
            categoriaExistente.descricao = descricao;
        }

        const resultado = await atualizar(id, categoriaExistente);

        if (resultado === 0) {
            return res.status(404).json({
                mensagem: "Erro ao atualizar categoria, nenhum registro atualizado"
            });
        }

        return res.status(200).json({ mensagem: "Categoria atualizada com sucesso" });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar categoria: " + erro
        });
    }
}

export async function deletarCategoria(req, res) {
    try {
        const id = Number(req.params.id);
        const categoriaExistente = await buscarPorId(id);

        if (!categoriaExistente) {
            return res.status(404).json({ mensagem: "Categoria não encontrada!" });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(404).json({ mensagem: "Nenhuma categoria deletada" });
        }

        return res.status(204).send();
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao deletar categoria: " + erro
        });
    }
}