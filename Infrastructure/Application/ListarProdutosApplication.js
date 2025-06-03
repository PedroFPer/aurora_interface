import { ListarProdutosService } from "../Service/ListarProdutosService.js"
import { verificarPersistence } from "../Persistence/VerificarPersistence.js";



window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById("conteiner_lista_produto");
  const service = new ListarProdutosService();
  const clienteInfo = verificarPersistence();

  let linkPagProduto = null;

  if (
    clienteInfo.userType === "employer" &&
    (clienteInfo.cargo === "ADMINISTRADOR_GERAL" || clienteInfo.cargo === "GERENCIADOR_ROUPAS")
  ) {
    linkPagProduto = "/pages/employer.tela_edicao_produto.html";
  } else {
    linkPagProduto = "/pages/tela_produto_consumidor.html";
  }


  try {
    const produtos = await service.executar();

    produtos.forEach(produto => {
      const imageUrl = `data:image/jpeg;base64,${produto.imagem}`;

      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
          <div class="product-image">
            <img src="${imageUrl}" alt="${produto.nome}">
          </div>
          <div class="product-info">
            <h3 class="product-title">${produto.nome}</h3>
            <p class="product-price">R$ ${produto.precoUnitario.toFixed(2)}</p>
            <img class="product-arrow" src="/assets/icon/arrow_50x50.png" alt="Seta">
          </div>
        `;

      card.onclick = () => {
        window.location.href = `${linkPagProduto}?id=${produto.id}`;
      };

      container.appendChild(card);
    });
  } catch (e) {
    console.error(e);
    container.innerText = "Erro ao carregar produtos.";
  }
});
