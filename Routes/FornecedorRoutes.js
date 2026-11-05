import express from "express";
import {
    cadastrarCategoria,
    listarCategorias,
    buscarCategoriaPorId,
    atualizarCategoria,
    deletarCategoria
} from "../Controller/CategoriaController.js";

const router = express.Router();

router.post("/", cadastrarCategoria);
router.get("/", listarCategorias);
router.get("/:id", buscarCategoriaPorId);
router.patch("/:id", atualizarCategoria);
router.delete("/:id", deletarCategoria);

export default router;