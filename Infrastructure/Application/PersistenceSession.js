  const userType = localStorage.getItem("userType");
  const pathname = window.location.pathname;

  const isConsumidorPage = pathname.includes("costumer")
  const isFuncionarioPage = pathname.includes("employer")
  

  let acessoLiberado = false;

  if (isConsumidorPage && userType === "consumidor") {
    acessoLiberado = true;
  } else if (isFuncionarioPage && userType === "funcionario") {
    acessoLiberado = true;
  } 

  if (acessoLiberado) {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.style.display = "block";
    });
  } else {
    console.log("permissão negada")
    window.location.href = "../pages/acesso-negado.html"; 
  }