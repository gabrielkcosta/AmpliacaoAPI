import express from "express";
import { produtoRoutes } from "./routes/produtoRoutes.js";
import { categoriaRoutes } from "./routes/categoriaRoutes.js";
import { fornecedorRoutes } from "./routes/fornecedorRoutes.js";

const app = express();

app.use(express.json());

produtoRoutes(app);
categoriaRoutes(app);
fornecedorRoutes(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:3001`);
});