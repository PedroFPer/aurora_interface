import { Cliente } from "../Entities/Cliente.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { CadastroClienteService } from "../Service/CadastroClienteService.js";

const form = document.getElementById("form_cadastro_cliente");
const outputErroNome = document.getElementById('erro-nome');
const outputErroEmail = document.getElementById('erro-email');
const outputErroSenha = document.getElementById('erro-senha');
const outputErroSenhaConfir = document.getElementById('erro-senha_confi');

const service = new CadastroClienteService();

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
        alert("Cadastro realizado com sucesso! Redirecionando para a tela inicial. Faça o login para continuar.");
        form.reset();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 2000);
    } catch (erro) {
        alert("Ocorreu um problema ao realizar o cadastro. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico. ");
    }
})