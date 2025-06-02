import { DeleteProdutoService } from "../Service/DeleteProdutoService.js";

const btnApagarProduto = document.getElementById("btnApagarProduto");

btnApagarProduto.addEventListener("click", async (event) => {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    const service = new DeleteProdutoService();

    try {
        await service.delete(produtoId);
        alert("Produto apagado com sucesso!");
        window.location.href = "/pages/tela_listar_produto.html";
    } catch (erro) {
        alert("Erro ao atualizar o produto.");
        console.error(erro);
    }
});
