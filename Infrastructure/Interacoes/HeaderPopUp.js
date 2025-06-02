    import { verificarPersistence } from "../Persistence/VerificarPersistence.js";
    import {encerrarSessao} from "../Persistence/EncerrarSessao.js"

    document.addEventListener('DOMContentLoaded', () => {
    const btn_suporte = document.getElementById('btn_suporte');
    const btn_carrinho = document.getElementById('btn_carrinho');
    const btn_user = document.getElementById('btn_user');

    const popups = {
        suporteDeslogado: document.getElementById('pop_up_suporte_deslogado'),
        carrinhoDeslogado: document.getElementById('pop_up_carrinho_deslogado'),
        usuarioDeslogado: document.getElementById('pop_up_user_deslogado'),
        funcionarioCarrinho: document.getElementById('pop_up_funcionario_carrinho'),
        consumidorLogado: document.getElementById('pop_up_consumidor_logado'),
        funcionarioAdm: document.getElementById('pop_up_funcionario_adm_logado'),
        gerenFunc: document.getElementById('pop_up_funcionario_geren_func_logado'),
        gerenProd: document.getElementById('pop_up_funcionario_geren_prod_logado'),
    };

    const clienteInfo = verificarPersistence();

    function configurarTogglePopup(botao, popup) {
        botao.addEventListener('click', (event) => {
        event.stopPropagation();
        alternarPopup(popup);
        });
    }

    function alternarPopup(popUp) {
        if (popUp.classList.contains('d-none')) {
        fecharTodosPopUps();
        popUp.classList.remove('d-none');
        } else {
        popUp.classList.add('d-none');
        }
    }

    function fecharTodosPopUps() {
        for (let key in popups) {
        if (popups[key] && !popups[key].classList.contains('d-none')) {
            popups[key].classList.add('d-none');
        }
        }
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

    (async () => {
        if (clienteInfo === "deslogado") {
        await carregarPopup('PopUpSuporteDeslogado.html', 'pop_up_suporte_deslogado');
        await carregarPopup('PopUpCarrinhoDeslogado.html', 'pop_up_carrinho_deslogado');
        await carregarPopup('PopUpConsumidorDeslogado.html', 'pop_up_user_deslogado');

        configurarTogglePopup(btn_suporte, popups.suporteDeslogado);
        configurarTogglePopup(btn_carrinho, popups.carrinhoDeslogado);
        configurarTogglePopup(btn_user, popups.usuarioDeslogado);
        return;
        }

        if (clienteInfo.userType === "costumer") {
        await carregarPopup('PopUpConsumidorLogado.html', 'pop_up_consumidor_logado');
        await carregarPopup('PopUpSuporteDeslogado.html', 'pop_up_suporte_deslogado');

        configurarTogglePopup(btn_suporte, popups.suporteDeslogado);
        btn_carrinho.addEventListener('click', () => window.location.href = "/pages/consumer.tela_carrinho.html");
        configurarTogglePopup(btn_user, popups.consumidorLogado);

        encerrarSessao();

        }

        if (clienteInfo.cargo) {
        await carregarPopup('PopUpFuncionarioCarrinho.html', 'pop_up_funcionario_carrinho');
        configurarTogglePopup(btn_carrinho, popups.funcionarioCarrinho);

        switch (clienteInfo.cargo) {
            case "ADMINISTRADOR_GERAL":
            await carregarPopup('PopUpFuncionarioAdm.html', 'pop_up_funcionario_adm_logado');
            configurarTogglePopup(btn_user, popups.funcionarioAdm);
            break;
            case "GERENCIADOR_FUNCIONARIOS":
            await carregarPopup('PopUpFuncionarioGerenFunc.html', 'pop_up_funcionario_geren_func_logado');
            configurarTogglePopup(btn_user, popups.gerenFunc);
            break;
            case "GERENCIADOR_ROUPAS":
            await carregarPopup('PopUpFuncionarioGerenProdu.html', 'pop_up_funcionario_geren_prod_logado');
            configurarTogglePopup(btn_user, popups.gerenProd);
            break;

            encerrarSessao();
        }
        }
    })();

    document.addEventListener('click', () => {
        fecharTodosPopUps();
    });
    });
