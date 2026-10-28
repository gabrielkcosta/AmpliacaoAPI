import {
  cadastrarFornecedor,
  listarFornecedores,
  buscarFornecedorPorIndice,
  atualizarFornecedor,
  deletarFornecedor
} from "../controller/fornecedorController.js";

export function fornecedorRoutes(app) {
  app.post("/fornecedor", cadastrarFornecedor);
  app.get("/fornecedor", listarFornecedores);
  app.get("/fornecedor/:indice", buscarFornecedorPorIndice);
  app.patch("/fornecedor/:indice", atualizarFornecedor);
  app.delete("/fornecedor/:indice", deletarFornecedor);
}