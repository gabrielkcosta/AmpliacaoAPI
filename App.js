import express from "express";
import { produtoRoutes } from "./routes/ProdutoRoutes.js";
import { categoriaRoutes } from "./routes/CategoriaRoutes.js";
import { fornecedorRoutes } from "./routes/FornecedorRoutes.js";

const app = express();

app.use(express.json());

produtoRoutes(app);
categoriaRoutes(app);
fornecedorRoutes(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:3001`);
});