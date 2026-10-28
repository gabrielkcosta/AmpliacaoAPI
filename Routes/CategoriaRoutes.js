import {
  cadastrarCategoria,
  listarCategorias,
  buscarCategoriaPorIndice,
  atualizarCategoria,
  deletarCategoria
} from "../controller/CategoriaController.js";

export function categoriaRoutes(app) {
  app.post("/categoria", cadastrarCategoria);
  app.get("/categoria", listarCategorias);
  app.get("/categoria/:indice", buscarCategoriaPorIndice);
  app.patch("/categoria/:indice", atualizarCategoria);
  app.delete("/categoria/:indice", deletarCategoria);
}