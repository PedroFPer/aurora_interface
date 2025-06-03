import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";

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
    const produto = await service.executar(produtoId);

    if (produto) {
      console.log("JSON chegou:", produto);
    } else {
      console.log("Nenhum dado recebido ou resposta vazia.");
    }

    const imageUrl = `data:image/jpeg;base64,${produto.imagem}`;

    document.title = `Aurora | ${produto.nome}`;

    document.getElementById('titulo_produto').innerText = produto.nome;
    document.getElementById('preco_produto').innerText = `R$ ${produto.precoUnitario.toFixed(2)}`;
    document.getElementById('parcelamento').innerText = `Em até 3 vezes de R$  ${parcelamento(produto.precoUnitario.toFixed(2))}`;
    document.getElementById('descricao_produto').innerText = produto.descricao;
    document.getElementById('imagem_produto').src = imageUrl;
    
    produto.tamanhos[];

    document.querySelectorAll('.size-option').forEach(botao => {
      const tamanho = botao.innerText.trim();
      if (tamanhosDisponiveis.includes(tamanho)) {
        botao.classList.add('active');
      } else {
        botao.classList.remove('active');
      }
    });

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

function parcelamento(preco) {
  const parcela = preco / 3;
  return parcela.toFixed(2).replace('.', ',');
}
