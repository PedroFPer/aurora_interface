import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import {LoginFuncionarioService} from "../Service/LoginFuncionarioService.js"


const form = document.getElementById("form_login_funcionario");
const outputErroCpf = document.getElementById('erro-cpf');
const outputErroSenha = document.getElementById('erro-senha');

const service = new LoginFuncionarioService();


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const cpf = formData.get("cpf");
    const senha = formData.get("senha");

    const mensagemErroCpf = ValidarUsuario.validarCpf(cpf);
    const mensagemErroSenha = ValidarUsuario.validarSenha(senha);

    outputErroCpf.textContent = mensagemErroCpf || '';
    outputErroSenha.textContent = mensagemErroSenha || '';

    const temErro = mensagemErroCpf || mensagemErroSenha;

     if (temErro) return;

     try {
        await service.verificar_login(cpf,senha);
        alert("Cadastro realizado com sucesso! Redirecionando para a tela inicial. Faça o login para continuar.");
        form.reset();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 2000);
    } catch (erro) {
        alert("Ocorreu um problema ao realizar o cadastro. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico. ");
    }

})