import {ProdutoConsumidorService} from "../Service/ProdutoConsumidorService.js";

window.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = urlParams.get('id');
 console.log("Produto ID:", produtoId);



  if (!produtoId) {
    alert("Produto não especificado na URL.");
    return;
  }

  const service = new ProdutoConsumidorService();

  try {
    const response = await service.executar(produtoId);

    if (!response.ok) {
      throw new Error("Produto não encontrado.");
    }

    const produto = await response.json();

    document.title = `Aurora | ${produto.nome}`;

    document.getElementById('titulo_produto').innerText = produto.nome;
    document.getElementById('preco_produto').innerText = `R$ ${produto.precoUnitario.toFixed(2)}`;
    document.getElementById('titulo_descricao').innerText = "Descrição";
    document.getElementById('descricao_produto').innerText = produto.descricao;



    // Converter imagem para URL
    const byteArray = new Uint8Array(produto.imagem);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob);
    document.getElementById('imagem_produto').src = imageUrl;

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
