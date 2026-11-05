import conexao from "../config/conexao.js";

export async function cadastrar(fornecedor) {
    const sql = "INSERT INTO fornecedor (nome, cnpj, telefone) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        fornecedor.nome,
        fornecedor.cnpj,
        fornecedor.telefone
    ]);
    
    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM fornecedor";
    const [resultado] = await conexao.execute(sql);
    
    return resultado;
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM fornecedor WHERE id_fornecedor = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado[0];
}

export async function atualizar(id, fornecedor) {
    const sql = "UPDATE fornecedor SET nome = ?, cnpj = ?, telefone = ? WHERE id_fornecedor = ?";
    const [resultado] = await conexao.execute(sql, [
        fornecedor.nome,
        fornecedor.cnpj,
        fornecedor.telefone,
        id
    ]);
    
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = "DELETE FROM fornecedor WHERE id_fornecedor = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    
    return resultado.affectedRows;
}