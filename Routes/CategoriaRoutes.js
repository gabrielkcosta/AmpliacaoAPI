import {
    cadastrarCategoria,
    listarCategorias,
    buscarCategoriaPorId, 
    atualizarCategoria,
    deletarCategoria
} from "../Controller/CategoriaController.js";

export function categoriaRoutes(app) {
    app.post("/categoria", cadastrarCategoria);
    app.get("/categoria", listarCategorias);
    app.get("/categoria/:id", buscarCategoriaPorId);      
    app.patch("/categoria/:id", atualizarCategoria);    
    app.delete("/categoria/:id", deletarCategoria);     
}