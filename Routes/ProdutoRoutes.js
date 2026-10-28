import {
  cadastrarProduto,
  listarProdutos,
  buscarProdutoPorIndice,
  atualizarProduto,
  deletarProduto
} from "../controller/produtoController.js";

export function produtoRoutes(app) {
  app.post("/produto", cadastrarProduto);
  app.get("/produto", listarProdutos);
  app.get("/produto/:indice", buscarProdutoPorIndice);
  app.patch("/produto/:indice", atualizarProduto);
  app.delete("/produto/:indice", deletarProduto);
}