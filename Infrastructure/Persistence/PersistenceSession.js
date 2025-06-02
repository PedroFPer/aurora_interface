const userType = sessionStorage.getItem("userType");
const pathname = window.location.pathname;

console.log("Tipo de usuario:",userType);

const isConsumidorPage = pathname.includes("consumer");
const isFuncionarioPage = pathname.includes("employer");

let acessoLiberado = false;

if (isConsumidorPage && userType === "consumidor") {
  acessoLiberado = true;
} else if (isFuncionarioPage && userType === "funcionario") {
  acessoLiberado = true;
}

if (acessoLiberado) {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.display = "block";

    const clienteJSON = sessionStorage.getItem("clienteInfo");
    if (clienteJSON) {
      const cliente = JSON.parse(clienteJSON);
      console.log("Cliente logado:", cliente);
    } else {
      console.warn("Nenhum cliente encontrado no sessionStorage.");
    }
  });
} else {
  console.log("Permissão negada");
  window.location.href = "/pages/acesso-negado.html";
}
