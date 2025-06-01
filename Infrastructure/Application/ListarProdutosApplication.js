import { ListarProdutosService } from "../Service/ListarProdutosService.js";

window.addEventListener('DOMContentLoaded', async () => {

  const container = document.getElementById("conteiner_lista_produto");
  const service = new ListarProdutosService();

  try {
    const produtos = await service.executar(); 

    produtos.forEach(produto => {
      const byteArray = new Uint8Array(produto.imagem);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-image col-2">
          <img src="${imageUrl}" alt="${produto.nome}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${produto.nome}</h3>
          <p class="product-price">R$ ${produto.precoUnitario.toFixed(2)}</p>
          <img class="product-arrow" src="/assets/icon/arrow_50x50.png" alt="Seta">
        </div>
      `;

      card.onclick = () => {
        window.location.href = `TESTE_tela_produto_consumidor.html?id=${produto.id}`;
      };

      container.appendChild(card);
    });
  } catch (e) {
    console.error(e);
    container.innerText = "Erro ao carregar produtos.";
  }
});
