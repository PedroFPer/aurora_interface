import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";

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
        descricao_produto.placeholder = produto.descricao;
        imagemProduto.src = imageUrl;



        //É resposável por adicionar a funcionalidade do input file no botão
        let novaImagemFile = null;

        btnArquivo.addEventListener('click', () => {
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

        const tamanhosDisponiveis = produto.tamanhos;

        document.querySelectorAll('.size-option').forEach(botao => {
            const tamanho = botao.innerText.trim();
            if (tamanhosDisponiveis.includes(tamanho)) {
                botao.classList.add('active');
            } else {
                botao.classList.remove('active');
            }
        });


        const sizeButtons = document.querySelectorAll('.size-option');

        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {

                if (button.classList.contains('active')) {

                    button.classList.remove('active');
                } else {
                    button.classList.add('active');
                }
                console.log();
            });
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
