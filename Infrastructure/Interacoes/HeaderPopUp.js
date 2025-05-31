document.addEventListener('DOMContentLoaded', () => {
    const btn_suporte = document.getElementById('btn_suporte');
    const btn_carrinho = document.getElementById('btn_carrinho');
    const btn_user = document.getElementById('btn_user');
    const popUpSuporteDeslogado = document.getElementById('pop_up_suporte_deslogado');
    const popUpCarrinhoDeslogado = document.getElementById('pop_up_carrinho_deslogado');
    const popUpUsuarioDeslogado = document.getElementById('pop_up_user_deslogado');
    const popUpFuncionarioCarrinho = document.getElementById('pop_up_funcionario_carrinho');
    const popUpConsumidorLogado = document.getElementById('pop_up_consumidor_logado');
    const popUpFuncionarioAdm = document.getElementById('pop_up_funcionario_adm_logado');
    const popUpGerecFunc = document.getElementById('pop_up_funcionario_geren_func_logado');
    const popUpGerecProdut = document.getElementById('pop_up_funcionario_geren_prod_logado');

    btn_suporte.addEventListener('click', function (event) {
        event.stopPropagation();
        alternarPopup(popUpSuporteDeslogado);
    });

    btn_carrinho.addEventListener('click', function (event) {
        event.stopPropagation();
        alternarPopup(popUpCarrinhoDeslogado);
    });

    btn_user.addEventListener('click', function (event) {
        event.stopPropagation();
        alternarPopup(popUpUsuarioDeslogado);
    });

    document.addEventListener('click', function () {
        fecharTodosPopUp();
    });

    function alternarPopup(popUp){
        if(popUp.classList.contains('d-none')){
            fecharTodosPopUp();
            popUp.classList.remove('d-none');
        }else{
            popUp.classList.add('d-none');
        }
    }

    function fecharTodosPopUp(){
        const popups = [
            popUpSuporteDeslogado,
            popUpCarrinhoDeslogado,
            popUpUsuarioDeslogado,
            popUpFuncionarioCarrinho,
            popUpConsumidorLogado,
            popUpFuncionarioAdm,
            popUpGerecFunc,
            popUpGerecProdut
        ];

        for (let popup of popups) {
            if (!popup.classList.contains('d-none')) {
                popup.classList.add('d-none');
                return popup;
            }
        }

        return null;
    }
});
