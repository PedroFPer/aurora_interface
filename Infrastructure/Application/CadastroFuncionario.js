import {Funcionario} from "../Entities/Funcionario.js"
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"

const form = document.getElementById("form_cadastro_funcionario");
const outputErroNome = document.getElementById('erro-nome');
const outputErroEmail = document.getElementById('erro-email');
const outputErroCpf = document.getElementById('erro-cpf');
const outputErroSenha = document.getElementById('erro-senha');
const outputErroSenhaConfir = document.getElementById('erro-senha_confi');
const outputErroCargo = document.getElementById('erro-cargo');

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const cpf = formData.get("cpf")
    const senha = formData.get("senha");
    const senha_confi = formData.get("senha_confi");
    const cargo = formData.get("cargo");

    const mensagemErroNome = ValidarUsuario.validarNome(nome);
    const mensagemErroEmail = ValidarUsuario.validarEmail(email);
    const mensagemErroCpf = ValidarUsuario.validarCpf(cpf);
    const mensagemErroSenha = ValidarUsuario.validarSenha(senha);
    const mensagemErroSenhaConfi = ValidarUsuario.validarSenhaConfi(senha, senha_confi);
    const mensagemErroCargo = ValidarUsuario.validarSelect(cargo);

     
    outputErroNome.textContent = mensagemErroNome || '';
    outputErroEmail.textContent = mensagemErroEmail || '';
    outputErroCpf.textContent = mensagemErroCpf || '';
    outputErroSenha.textContent = mensagemErroSenha || '';
    outputErroSenhaConfir.textContent = mensagemErroSenhaConfi || '';
    outputErroCargo.textContent = mensagemErroCargo || '';

    const temErro = mensagemErroNome || mensagemErroEmail || mensagemErroSenha || mensagemErroSenhaConfi;

    if (temErro) return;

    const funcionario = new Funcionario(nome_completo, email, senha, cargo, status);

    
});