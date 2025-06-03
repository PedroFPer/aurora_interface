function redirecionarParaIndex() {
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);
}


document.addEventListener("DOMContentLoaded", () => {
  redirecionarParaIndex();
});
