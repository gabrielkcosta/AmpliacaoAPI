import conexao from "../config/conexao.js";

export async function cadastrar(categoria) {
    const sql = "INSERT INTO categoria (nome, descricao) VALUES (?, ?)";
    const [resultado] = await conexao.execute(sql, [
        categoria.nome,
        categoria.descricao
    ]);
    
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM categoria";
    const [resultado] = await conexao.execute(sql);
    
    return resultado;
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM categoria WHERE id_categoria = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado[0];
}

export async function atualizar(id, categoria) {
    const sql = "UPDATE categoria SET nome = ?, descricao = ? WHERE id_categoria = ?";
    const [resultado] = await conexao.execute(sql, [
        categoria.nome,
        categoria.descricao,
        id
    ]);
    
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = "DELETE FROM categoria WHERE id_categoria = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}