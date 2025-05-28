import { Cliente } from "../Entities/Cliente.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"

const form = document.getElementById("form_cadastro_cliente");
const outputErroNome = document.getElementById('erro-nome');
const outputErroEmail = document.getElementById('erro-email');
const outputErroSenha = document.getElementById('erro-senha');
const outputErroSenhaConfir = document.getElementById('erro-senha_confi');

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

    if(mensagemErroNome){
        outputErroNome.textContent =mensagemErroNome;
    }else{
         outputErroNome.textContent ='';
    }

    if(mensagemErroEmail){
        outputErroEmail.textContent =mensagemErroEmail;
    }else{
         outputErroEmail.textContent ='';
    }

    if(mensagemErroSenha){
        outputErroSenha.textContent =mensagemErroSenha;
    }else{
         outputErroSenha.textContent ='';
    }

    if(mensagemErroSenhaConfi){
        outputErroSenhaConfir.textContent =mensagemErroSenhaConfi;
    }else{
         outputErroSenhaConfir.textContent ='';
    }

})