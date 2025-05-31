import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import {LoginConsumidorService} from "../Service/LoginConsumidorService.js"


const form = document.getElementById("form_login_consumidor");
const outputErroEmail = document.getElementById('erro-email');
const outputErroSenha = document.getElementById('erro-senha');

const service = new LoginConsumidorService();


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const senha = formData.get("senha");

    const mensagemErroEmail = ValidarUsuario.validarEmail(email);
    const mensagemErroSenha = ValidarUsuario.validarSenha(senha);

    outputErroEmail.textContent = mensagemErroEmail || '';
    outputErroSenha.textContent = mensagemErroSenha || '';

    const temErro = mensagemErroEmail || mensagemErroSenha;

     if (temErro) return;

     try {
        await service.verificar_login(email,senha);
        alert("Cadastro realizado com sucesso! Redirecionando para a tela inicial. Faça o login para continuar.");
        form.reset();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 2000);
    } catch (erro) {
        alert("Ocorreu um problema ao realizar o cadastro. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico. ");
    }

})