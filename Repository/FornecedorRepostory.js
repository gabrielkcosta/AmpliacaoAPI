const fornecedores = [];

export function cadastrar(fornecedor) {
  fornecedores.push(fornecedor);
  return fornecedor;
}

export function listar() {
  return fornecedores;
}

export function buscarPorIndice(indice) {
  return fornecedores[indice];
}

export function atualizar(indice, fornecedor) {
  fornecedores[indice] = fornecedor;
  return fornecedores[indice];
}

export function deletar(indice) {
  return fornecedores.splice(indice, 1);
}