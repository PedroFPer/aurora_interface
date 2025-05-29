import { Cliente } from "../Entities/Cliente.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { CadastroCliente } from "../Service/CadastroCliente.js";

const form = document.getElementById("form_cadastro_cliente");
const outputErroNome = document.getElementById('erro-nome');
const outputErroEmail = document.getElementById('erro-email');
const outputErroSenha = document.getElementById('erro-senha');
const outputErroSenhaConfir = document.getElementById('erro-senha_confi');

const service = new CadastroCliente();

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const senha = formData.get("senha");
    const senha_confi = formData.get("senha_confi");

    const mensagemErroNome = ValidarUsuario.validarNome(nome);
    const mensagemErroEmail = ValidarUsuario.validarEmail(email);
    const mensagemErroSenha = ValidarUsuario.validarSenha(senha);
    const mensagemErroSenhaConfi = ValidarUsuario.validarSenhaConfi(senha, senha_confi);

    outputErroNome.textContent = mensagemErroNome || '';
    outputErroEmail.textContent = mensagemErroEmail || '';
    outputErroSenha.textContent = mensagemErroSenha || '';
    outputErroSenhaConfir.textContent = mensagemErroSenhaConfi || '';

    const temErro = mensagemErroNome || mensagemErroEmail || mensagemErroSenha || mensagemErroSenhaConfi;

    if (temErro) return;

    const cliente = new Cliente(nome, email, senha);

    try {
        await service.cadastrar(cliente);
        alert("Cliente cadastrado com sucesso!");
        form.reset();
    } catch (erro) {
        alert("Erro ao cadastrar cliente: " + erro.message);
    }
})