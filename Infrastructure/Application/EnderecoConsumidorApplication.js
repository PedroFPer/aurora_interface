import { Endereco } from "../Entities/Endereco.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"
import { CadastroEnderecoService } from "../Service/CadastroEnderecoService.js";

const form = document.getElementById("form_cadastro_endereco");
const outputErroCep = document.getElementById('erro-cep');
const outputErroLogradouro = document.getElementById('erro-logradouro');
const outputErroRua = document.getElementById('erro-rua');
const outputErroBairro = document.getElementById('erro-bairro');
const outputErroCidade = document.getElementById('erro-cidade');
const outputErroEstado = document.getElementById('erro-estado');
const outputErroNumeroCasa = document.getElementById('erro-numero_casa');

const service = new CadastroEnderecoService();

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const cep = formData.get("cep");
    const logradouro = formData.get("logradouro");
    const rua = formData.get("rua");
    const bairro = formData.get("bairro");
    const cidade = formData.get("cidade");
    const estado = formData.get("estado");
    const numero_casa = formData.get("numero_casa");

    const mensagemErroCep = ValidarUsuario.validarCep(cep);
    const mensagemErroLogradouro = ValidarUsuario.validarNome(logradouro);
    const mensagemErroRua = ValidarUsuario.validarNome(rua);
    const mensagemErroBairro = ValidarUsuario.validarNome(bairro);
    const mensagemErroCidade = ValidarUsuario.validarNome(cidade);
    const mensagemErroEstado = ValidarUsuario.validarSelect(estado);
    const mensagemErroNumeroCasa = ValidarUsuario.validarNumeroCasa(numero_casa);

    outputErroCep.textContent = mensagemErroCep || '';
    outputErroLogradouro.textContent = mensagemErroLogradouro || '';
    outputErroRua.textContent = mensagemErroRua || '';
    outputErroBairro.textContent = mensagemErroBairro || '';
    outputErroCidade.textContent = mensagemErroCidade || '';
    outputErroEstado.textContent = mensagemErroEstado || '';
    outputErroNumeroCasa.textContent = mensagemErroNumeroCasa || '';

   const temErro = mensagemErroCep || mensagemErroLogradouro || mensagemErroRua || mensagemErroBairro || mensagemErroCidade || mensagemErroEstado || mensagemErroNumeroCasa;

    if (temErro) return;

    const cliente_id = 1;

    const endereco = new Endereco(cliente_id, rua, numero_casa, logradouro, bairro, cidade, estado, cep);

    try {
        await service.cadastrar(endereco);
        alert("Endereço cadastrado com sucesso!");
        form.reset();
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 2000);
    } catch (erro) {
        alert("Ocorreu um problema ao atualizar o endereço. Verifique sua conexão com a internet e tente novamente. Se o erro persistir, entre em contato com o suporte técnico.");
    }



})
