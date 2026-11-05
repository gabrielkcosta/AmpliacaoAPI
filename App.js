import express from "express";
import { produtoRoutes } from "./Routes/ProdutoRoutes.js";
import { categoriaRoutes } from "./Routes/CategoriaRoutes.js";
import { fornecedorRoutes } from "./Routes/FornecedorRoutes.js";

const app = express();

app.use(express.json());

produtoRoutes(app);
categoriaRoutes(app);
fornecedorRoutes(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:3001`);
});