import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { LoginFuncionarioService } from "../Service/LoginFuncionarioService.js"

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
        const funcionario = await service.verificar_login(cpf, senha);

        if (funcionario != null) {
            console.log(funcionario);
            alert("Login realizado com sucesso! Redirecionando para a tela inicial.");
            sessionStorage.setItem("clienteInfo", JSON.stringify(funcionario));
            sessionStorage.setItem("userType", "employer");
            form.reset();

            setTimeout(() => {
                window.location.href = "/index.html";
            }, 100);
        } else {
            alert("Verifique seu CPF ou senha.");
        }
    } catch (erro) {
        alert("Ocorreu um problema ao realizar o login. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico.");
        console.error("Erro ao realizar login:", erro);
    }
});
