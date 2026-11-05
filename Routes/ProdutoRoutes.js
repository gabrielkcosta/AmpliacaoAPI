import express from "express";
import { cadastrarProduto, 
    listarProdutos,
    BuscarProdutoPorId,
    atualizarProduto,
    deletarProduto 
} from "../Controller/ProdutoController.js"; 

const router = express.Router();

router.post("/", cadastrarProduto);
router.get("/", listarProdutos);
router.get("/:id", BuscarProdutoPorId);
router.patch("/:id", atualizarProduto);
router.delete("/:id", deletarProduto);

export default router;
