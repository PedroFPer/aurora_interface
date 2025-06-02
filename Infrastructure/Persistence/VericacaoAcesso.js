import { verificarPersistence } from "./VerificarPersistence.js";

const clienteInfo = verificarPersistence();
const pathname = window.location.pathname;
const pageName = pathname.split("/").pop(); 

const permissoes = {
  geral: [
    "index.html",
    "tela_produto_consumidor.html",
    "tela_login_funcionario.html",
    "tela_login_consumidor.html",
    "tela_cadastro_consumidor.html",
    "tela_listar_produto.html",
    "tela_produto_consumido_produto_1.html",
    "tela_produto_consumido_produto_2.html",
    "tela_produto_consumido_produto_3.html",
    "tela_produto_consumido_produto_4.html",
    "tela_produto_consumido_produto_5.html",
    "tela_produto_consumido_produto_6.html",
    "tela_produto_consumido_produto_7.html",
  ],

  costumer: [
    "consumer.tela_adicionar_endereco.html",
    "consumer.tela_carrinho.html",
    "consumer.tela_compras.html",
    "consumer.tela_detalhes_pedidos.html",
    "consumer.tela_pedidos.html"
  ],

  ADMINISTRADOR_GERAL: [
    "employer.tela_edicao_produto.html",
    "employer.tela_cadastro_funcionario.html",
    "employer.tela_adicionar_produto.html"
  ],

  GERENCIADOR_ROUPAS: [
    "employer.tela_edicao_produto.html",
    "employer.tela_adicionar_produto.html"
  ],

  GERENCIADOR_FUNCIONARIOS: [
    "employer.tela_cadastro_funcionario.html"
  ]
};

function temPermissao(clienteInfo, pageName) {
  if (permissoes.geral.includes(pageName)) {
    return true;
  }

  if (clienteInfo === "deslogado") {
    return false;
  }

  if (clienteInfo.userType === "costumer") {
    return permissoes.costumer.includes(pageName);
  }

  if (clienteInfo.userType === "employer") {
    const cargo = clienteInfo.cargo;
    return permissoes[cargo]?.includes(pageName) || false;
  }

  return false;
}

if (!temPermissao(clienteInfo, pageName)) {
  window.location.href = "/pages/acesso-negado.html";
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.display = "block";
  });
}
