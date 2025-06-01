import { Produto } from "../Entities/Produto.js"
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { AdicionarProdutoService } from "../Service/AdicionarProdutoService.js"

const form = document.getElementById("form_adicionar_produto");
const outputErroNome = document.getElementById('erro-nome');
const outputErroPreco = document.getElementById('erro-preco');
const outputErroCategoria = document.getElementById('erro-categoria');
const outputErroTamanho = document.getElementById('erro-tamanho');
const outputErroDescricaoProduto = document.getElementById('erro-descricao_produto');
const outputErroImagem = document.getElementById('erro-imagem');

const service = new AdicionarProdutoService();

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get("nome");
    const preco = formData.get("preco");
    const categoria = formData.get("categoria");
    const tamanho = formData.get("tamanho");
    const descricao_produto = formData.get("descricao_produto");
    const imagemFile = formData.get("imagem");

    const mensagemErroNome = ValidarUsuario.validarNome(nome);
    const mensagemErroPreco = ValidarUsuario.validarPreco(preco);
    const mensagemErroCategoria = ValidarUsuario.validarSelect(categoria);
    const mensagemErroTamanho = ValidarUsuario.validarSelect(tamanho);
    const mensagemDescricaoProduto = ValidarUsuario.validarNome(descricao_produto);
    const mensagemImagem = ValidarUsuario.validarImagem(imagemFile); //

    outputErroNome.textContent = mensagemErroNome || '';
    outputErroPreco.textContent = mensagemErroPreco || '';
    outputErroCategoria.textContent = mensagemErroCategoria || '';
    outputErroTamanho.textContent = mensagemErroTamanho || '';
    outputErroDescricaoProduto.textContent = mensagemDescricaoProduto || '';
    outputErroImagem.textContent = mensagemImagem || '';

    const temErro = mensagemErroNome || mensagemErroPreco || mensagemErroCategoria || mensagemErroTamanho || mensagemDescricaoProduto || mensagemImagem;

    if (temErro) return;

    //  Converter imagem em array de bytes
    const imagemBytes = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const arrayBuffer = reader.result;
            const bytes = new Uint8Array(arrayBuffer);
            resolve(Array.from(bytes)); 
        };

        reader.onerror = () => {
            reject("Erro ao ler imagem");
        };

        reader.readAsArrayBuffer(imagemFile);
    });


    const produto = new Produto(nome, descricao_produto, preco, categoria, imagemBytes);

    try {
        await service.cadastrar(produto);
        alert("Produto cadastrado com sucesso!");
        form.reset();

        setTimeout(() => {
            window.location.href = "/index.html"; 
        }, 2000);
    } catch (erro) {
        alert("Não foi possível concluir o cadastro do produto. Verifique sua conexão com a internet e tente novamente. Caso o problema persista, entre em contato com o suporte técnico.");
        console.error("Erro ao cadastrar produto:", erro);
    }
});
