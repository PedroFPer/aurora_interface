window.addEventListener('DOMContentLoaded', () => {
    for (let n = 1; n <= 8; n++) {
        const produtoElement = document.getElementById(`produto_${n}`);
        if (!produtoElement) {
            console.warn(`Elemento produto_${n} não encontrado.`);
            continue;
        }

        const pagina = `/pages/vitrine_pages/tela_produto_consumido_produto_${n}.html`;
        const idParam = 99 + n; // 100 para produto_1, 101 para produto_2, etc.

        produtoElement.addEventListener('click', () => {
            const url = `${pagina}?id=${idParam}`;
            window.location.href = url;
        });
    }
});
