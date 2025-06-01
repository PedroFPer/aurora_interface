import { ProdutoConsumidorService } from "../Service/ProdutoConsumidorService.js";
import { ValidarUsuario } from "../Validators/ValidarUsuario.js"

export async function alterarProduto(dados) {
  const service = new ProdutoConsumidorService();

  const mensagemErroImagem = ValidarUsuario.validarEmail(dados.tituloProduto);
  const mensagemErroNome = ValidarUsuario.validarNome(nome);
  const mensagemErroPreco = ValidarUsuario.validarEmail(email);
  const mensagemErroSelectTamanho = ValidarUsuario.validarSenha(senha);
  const mensagemErroDescricao = ValidarUsuario.validarSenhaConfi(senha, senha_confi);

}