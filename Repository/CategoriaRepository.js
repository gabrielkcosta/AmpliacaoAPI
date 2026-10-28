const categorias = [];

export function cadastrar(categoria) {
  categorias.push(categoria);
  return categoria;
}

export function listar() {
  return categorias;
}

export function buscarPorIndice(indice) {
  return categorias[indice];
}

export function atualizar(indice, categoria) {
  categorias[indice] = categoria;
  return categorias[indice];
}

export function deletar(indice) {
  return categorias.splice(indice, 1);
}