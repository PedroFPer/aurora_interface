import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { LoginConsumidorService } from "../Service/LoginConsumidorService.js"
import { Cliente } from "../Entities/Cliente.js";


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

        const cliente = await service.verificar_login(email, senha);

        if (cliente != null) {
            alert("Login realizado com sucesso! Redirecionando para a tela inicial. Faça o login para continuar.");
            sessionStorage.setItem("clienteInfo", JSON.stringify(cliente));
            sessionStorage.setItem("userType", "costumer");

            form.reset();

            setTimeout(() => {
                window.location.href = "/index.html";
            }, 100);

        } else {
            alert("Verifique seu email ou senha.");
        }
    } catch (erro) {
        alert("Ocorreu um problema ao realizar o cadastro. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico. ");
    }

})