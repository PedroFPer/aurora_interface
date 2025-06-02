import { verificarPersistence } from "../Persistence/VerificarPersistence.js";

document.addEventListener('DOMContentLoaded', () => {
    const clienteInfo = verificarPersistence();

    if (clienteInfo === "deslogado") {
        carregarPopupSuporteDeslogado();
        carregarPopupCarrinhoDeslogado();
        carregarPopupConsumidorDeslogado();
        return;
    } else {

        if (clienteInfo.userType === "costumer") {
            carregarPopupConsumidorLogado();
            carregarPopupSuporteDeslogado();
        }

        if (clienteInfo.cargo) {
            if (clienteInfo.cargo === "ADMINISTRADOR_GERAL") {
                carregarPopupFuncionarioAdm();
            }

            if (clienteInfo.cargo === "GERENCIADOR_FUNCIONARIOS") {
                carregarPopupFuncionarioGerenFunc();
            }

            if (clienteInfo.cargo === "GERENCIADOR_ROUPAS") {
                carregarPopupFuncionarioGerenProdu();
            }

            carregarPopupFuncionarioCarrinho();
        }

    }
});

async function carregarPopupCarrinhoDeslogado() {
    await carregarPopup(
        'PopUpCarrinhoDeslogado.html',
        'pop_up_carrinho_deslogado'
    );
}

async function carregarPopupConsumidorDeslogado() {
    await carregarPopup(
        'PopUpConsumidorDeslogado.html',
        'pop_up_user_deslogado'
    );
}

async function carregarPopupConsumidorLogado() {
    await carregarPopup(
        'PopUpConsumidorLogado.html',
        'pop_up_consumidor_logado'
    );
}

async function carregarPopupFuncionarioAdm() {
    await carregarPopup(
        'PopUpFuncionarioAdm.html',
        'pop_up_funcionario_adm_logado'
    );
}

async function carregarPopupFuncionarioCarrinho() {
    await carregarPopup(
        'PopUpFuncionarioCarrinho.html',
        'pop_up_funcionario_carrinho'
    );
}

async function carregarPopupFuncionarioGerenFunc() {
    await carregarPopup(
        'PopUpFuncionarioGerenFunc.html',
        'pop_up_funcionario_geren_func_logado'
    );
}

async function carregarPopupFuncionarioGerenProdu() {
    await carregarPopup(
        'PopUpFuncionarioGerenProdu.html',
        'pop_up_funcionario_geren_prod_logado'
    );
}

async function carregarPopupSuporteDeslogado() {
    await carregarPopup(
        'PopUpSuporteDeslogado.html',
        'pop_up_suporte_deslogado'
    );
}


async function carregarPopup(arquivo, idElemento) {
    try {
        const resposta = await fetch(`/Infrastructure/Components/Popups/${arquivo}`);
        const html = await resposta.text();
        document.getElementById(idElemento).innerHTML += html;
    } catch (erro) {
        console.error(`Erro ao carregar pop-up ${arquivo}:`, erro);
    }
}
