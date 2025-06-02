import { Produto } from "../Entities/Produto.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js";
import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";
import { EdicaoProdutoService } from "../Service/EdicaoProdutoService.js";


function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return Array.from(bytes);
}

const btnSalvarAlter = document.getElementById("btnSalvarAlter");

if (btnSalvarAlter) {
  const outputErroImagem = document.getElementById('erro-imagem');
  const outputErroNome = document.getElementById('erro-nome');
  const outputErroPreco = document.getElementById('erro-preco');
  const outputErroSelectTamanho = document.getElementById('erro-select_tamanho');
  const outputErroDescricao = document.getElementById('erro-descricao');

  btnSalvarAlter.addEventListener("click", async (event) => {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    const serviceProduto = new ProdutoConsumidorService();
    const serviceEdicaoProduto = new EdicaoProdutoService();

    let produto;
    try {
      produto = await serviceProduto.executar(produtoId);
    } catch (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    const imagemFileNovo = document.getElementById('inputFile').files[0];
    const nomeProdutoNovo = document.getElementById('titulo_produto').value.trim();
    const precoNovo = document.getElementById('preco_produto').value.trim();
    const descricaoNovo = document.getElementById('descricao_produto').value.trim();

    const selectTamanho = document.querySelectorAll('.size-option');
    const arrayTamanhoNovo = [];

    selectTamanho.forEach(t => {
      if (t.classList.contains('active')) {
        arrayTamanhoNovo.push(t.textContent.trim());
      }
    });

    // Valores finais a serem usados
    let imagemFinal = null;
    let nomeFinal = "";
    let precoFinal = "";
    let descricaoFinal = "";
    let tamanhosFinal = [];

    // ----- IMAGEM -----
    if (!imagemFileNovo) {
      imagemFinal = base64ToArrayBuffer(produto.imagem);
    } else {

      const mensagemErroImagem = ValidarUsuario.validarImagem(imagemFileNovo);
      outputErroImagem.textContent = mensagemErroImagem || "";

       imagemFinal = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const arrayBuffer = reader.result;
          const bytes = new Uint8Array(arrayBuffer);
          resolve(Array.from(bytes));
        };

        reader.onerror = () => {
          reject("Erro ao ler imagem");
        };

        reader.readAsArrayBuffer(imagemFileNovo);
      });
    }

    // ----- NOME -----
    if (!nomeProdutoNovo) {
      nomeFinal = produto.nome;
    } else {
      const mensagemErroNome = ValidarUsuario.validarNome(nomeProdutoNovo);
      outputErroNome.textContent = mensagemErroNome || "";
      if (mensagemErroNome) return;
      nomeFinal = nomeProdutoNovo;
    }

    // ----- PREÇO -----
    if (!precoNovo) {
      precoFinal = produto.precoUnitario;
    } else {
      const mensagemErroPreco = ValidarUsuario.validarPreco(precoNovo);
      outputErroPreco.textContent = mensagemErroPreco || "";
      if (mensagemErroPreco) return;
      precoFinal = parseFloat(precoNovo);
    }

    // ----- DESCRIÇÃO -----
    if (!descricaoNovo) {
      descricaoFinal = produto.descricao;
    } else {
      const mensagemErroDescricao = ValidarUsuario.validarNome(descricaoNovo);
      outputErroDescricao.textContent = mensagemErroDescricao || "";
      if (mensagemErroDescricao) return;
      descricaoFinal = descricaoNovo;
    }

    // ----- TAMANHOS -----
    if (arrayTamanhoNovo.length === 0) {
      tamanhosFinal = produto.tamanhos || [];
    } else {
      const mensagemErroTamanho = ValidarUsuario.validarArray(arrayTamanhoNovo);
      outputErroSelectTamanho.textContent = mensagemErroTamanho || "";
      if (mensagemErroTamanho) return;
      tamanhosFinal = arrayTamanhoNovo;
    }

    const produtoAtualizado = new Produto(
      nomeFinal,
      descricaoFinal,
      precoFinal,
      produto.categoria,
      imagemFinal,
      produtoId
      //tamanhosFinal
    );

    console.log(produtoAtualizado);

    try {
      await serviceEdicaoProduto.update(produtoId, produtoAtualizado);
      alert("Produto atualizado com sucesso!");
      setTimeout(() => window.location.href = "/index.html", 2000);
    } catch (erro) {
      alert("Erro ao atualizar o produto.");
      console.error(erro);
    }
  });
}
