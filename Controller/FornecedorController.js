import { Fornecedor } from "../model/Fornecedor.js";
import {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    deletar
} from "../Repository/FornecedorRepostory.js";

export async function cadastrarFornecedor(req, res) {
    try {
        const { nome, cnpj, telefone } = req.body;

        if (!nome || !cnpj || !telefone) {
            return res.status(400).json({
                mensagem: "Nome, CNPJ e telefone são obrigatórios"
            });
        }

        const novoFornecedor = new Fornecedor(nome, cnpj, telefone);
        const id = await cadastrar(novoFornecedor);

        return res.status(201).json({
            mensagem: "Fornecedor cadastrado com sucesso",
            id_fornecedor: id
        });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar fornecedor: " + erro
        });
    }
}

export async function listarFornecedores(req, res) {
    try {
        const lista = await listar();
        return res.status(200).json(lista);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar fornecedores: " + erro
        });
    }
}

export async function buscarFornecedorPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const fornecedor = await buscarPorId(id);

        if (!fornecedor) {
            return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
        }

        return res.status(200).json(fornecedor);
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar fornecedor por ID: " + erro
        });
    }
}

export async function atualizarFornecedor(req, res) {
    try {
        const id = Number(req.params.id);
        const fornecedorExistente = await buscarPorId(id);

        if (!fornecedorExistente) {
            return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
        }

        const { nome, cnpj, telefone } = req.body;

        if (nome !== undefined) {
            fornecedorExistente.nome = nome;
        }
        if (cnpj !== undefined) {
            fornecedorExistente.cnpj = cnpj;
        }
        if (telefone !== undefined) {
            fornecedorExistente.telefone = telefone;
        }

        const resultado = await atualizar(id, fornecedorExistente);

        if (resultado === 0) {
            return res.status(404).json({
                mensagem: "Erro ao atualizar fornecedor, nenhum registro atualizado"
            });
        }

        return res.status(200).json({ mensagem: "Fornecedor atualizado com sucesso" });
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar fornecedor: " + erro
        });
    }
}

export async function deletarFornecedor(req, res) {
    try {
        const id = Number(req.params.id);
        const fornecedorExistente = await buscarPorId(id);

        if (!fornecedorExistente) {
            return res.status(404).json({ mensagem: "Fornecedor não encontrado!" });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(404).json({ mensagem: "Nenhum fornecedor deletado" });
        }

        return res.status(204).send();
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao deletar fornecedor: " + erro
        });
    }
}