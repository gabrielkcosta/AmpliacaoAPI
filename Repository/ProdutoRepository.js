const produtos = [];

export function cadastrar(produto) {
  produtos.push(produto);
  return produto;
}

export function listar() {
  return produtos;
}

export function buscarPorIndice(indice) {
  return produtos[indice];
}

export function atualizar(indice, produto) {
  produtos[indice] = produto;
  return produtos[indice];
}

export function deletar(indice) {
  return produtos.splice(indice, 1);
}