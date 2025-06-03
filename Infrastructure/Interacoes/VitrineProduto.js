import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";
import { verificarPersistence } from "../Persistence/VerificarPersistence.js";


const clienteInfo = verificarPersistence();

window.addEventListener('DOMContentLoaded', async () => {
    const service = new ProdutoConsumidorService();

    for (let n = 1; n <= 8; n++) {
        const produtoElement = document.getElementById(`produto_${n}`);
        if (!produtoElement) {
            console.warn(`Elemento produto_${n} não encontrado.`);
            continue;
        }

        try {
            const produtoId = 27 + n;
            const produto = await service.executar(produtoId);

            console.log(produto);


            const imageUrl = `data:image/jpeg;base64,${produto.imagem}`;

            const nomeProdutoElement = produtoElement.querySelector('.nome_produto');
            const precoProdutoElement = produtoElement.querySelector('.preco_produto');
            const imgProdutoElement = produtoElement.querySelector('.produto_img');

            if (nomeProdutoElement) nomeProdutoElement.innerText = produto.nome;
            if (precoProdutoElement) precoProdutoElement.innerText = `R$ ${produto.precoUnitario.toFixed(2)}`;
            if (imgProdutoElement) imgProdutoElement.src = imageUrl;

        } catch (error) {
            console.error(`Erro ao carregar o produto ${n}:`, error);
            alert(`Erro ao carregar o produto ${n}: ${error.message}`);
        }

        let pagina;

        if (
            clienteInfo.userType === "employer" &&
            (clienteInfo.cargo === "ADMINISTRADOR_GERAL" || clienteInfo.cargo === "GERENCIADOR_ROUPAS")
        ) {
            pagina = "/pages/employer.tela_edicao_produto.html";
        } else {
            pagina = "/pages/tela_produto_consumidor.html";
        }

        produtoElement.addEventListener('click', () => {
            const url = `${pagina}?id=${27 + n}`;
            window.location.href = url;
        });
    }
});
