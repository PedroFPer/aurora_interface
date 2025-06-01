import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";
import { alterarProduto } from "../Application/TESTE.EdicaoProdutoApplication.js";

const btnArquivo = document.getElementById('btnAlterar');
const inputFile = document.getElementById('inputFile');
const tituloProduto = document.getElementById('titulo_produto');
const precoProduto = document.getElementById('preco_produto');
const parcelamentoOutput = document.getElementById('parcelamento');
const descricao_produto = document.getElementById('descricao_produto');
const imagemProduto = document.getElementById('imagem_produto');
const btnSalvarAlter = document.getElementById('btnSalvarAlter');

const selectTamanho = document.querySelectorAll('.size-option');


window.addEventListener('DOMContentLoaded', async () => {

    //Verificar o id na url para fazer a requisição do produto
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    console.log("Produto ID:", produtoId);

    if (!produtoId) {
        alert("Produto não especificado na URL.");
        return;
    }

    const service = new ProdutoConsumidorService();

    try {

        //Faz a requisição e chama o produto
        const produto = await service.executar(produtoId);

        if (produto) {
            console.log("JSON chegou:", produto);
        } else {
            console.log("Nenhum dado recebido ou resposta vazia.");
        }

        //Imprime as informações do produto como um placeholder 
        const imageUrl = `data:image/jpeg;base64,${produto.imagem}`;

        document.title = `Aurora | ${produto.nome}`;

        tituloProduto.placeholder = produto.nome;
        precoProduto.placeholder = `R$ ${produto.precoUnitario.toFixed(2)}`;
        parcelamentoOutput.innerText = `Em até 3 vezes de R$  ${parcelamento(produto.precoUnitario.toFixed(2))}`;
        descricao_produto.placeholder = produto.descricao;
        imagemProduto.src = imageUrl;

        //É resposável por adicionar a funcionalidade do input file no botão
        let novaImagemFile = null; 

        btnAlterar.addEventListener('click', () => {
            inputFile.click(); 
        });

        //É responsável por trocar a imagem atual pela nova e adicionar essa nova imagem em uma variavel.
        inputFile.addEventListener('change', () => {
            const file = inputFile.files[0];
            if (!file) return;

            novaImagemFile = file; 

            const reader = new FileReader();
            reader.onload = e => {
                imagemProduto.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        const tamanhosDisponiveis = 'P' //Tem que ver com o banco de dados para puxar os tamanhos

        //É responsável pela interações entre os botões e armazenar os tamanhos em um array
        const tamanhosSelecionados = [];

        selectTamanho.forEach(tamanhos => {
            tamanhos.addEventListener('click', () => {
                const tamanhosDisponiveis = tamanhos.textContent.trim();

                if (tamanhosSelecionados.includes(tamanhosDisponiveis)) {
                    const index = tamanhosSelecionados.indexOf(tamanhosDisponiveis);
                    tamanhosSelecionados.splice(index, 1);
                    tamanhos.classList.remove('active');
                } else {
                    tamanhosSelecionados.push(tamanhosDisponiveis);
                    tamanhos.classList.add('active');
                }
                console.log(tamanhosSelecionados);
            });
        });

        //Defini em um botão a chamada de uma função responsável pela verificação e futuramente a alteração no produto
        btnSalvarAlter.addEventListener('click', () => {
            const dadosProduto = {
                nome: tituloProduto.value,
                preco: precoProduto.value,
                descricao: descricao_produto.value,
                tamanhos: [...tamanhosSelecionados],
                imagemFile: novaImagemFile
            };

            alterarProduto(dadosProduto);
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
