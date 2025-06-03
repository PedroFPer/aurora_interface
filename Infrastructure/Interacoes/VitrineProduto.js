window.addEventListener('DOMContentLoaded', () => {
    for (let n = 1; n <= 8; n++) {
        const produtoElement = document.getElementById(`produto_${n}`);
        if (!produtoElement) {
            console.warn(`Elemento produto_${n} não encontrado.`);
            continue;
        }

        const pagina = `/pages/tela_produto_consumidor.html`;
        const idParam = 18 + n; 

        produtoElement.addEventListener('click', () => {
            const url = `${pagina}?id=${idParam}`;
            window.location.href = url;
        });
    }
});
