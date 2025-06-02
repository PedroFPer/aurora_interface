export function encerrarSessao() {
    const btnEncerrarSessao = document.getElementById('btn_encerrar_sessao');

    btnEncerrarSessao.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "/index.html";
    });
}




