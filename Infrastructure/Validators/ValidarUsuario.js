export class ValidarUsuario {
    static validarNome(nome) {
        if (!nome) {
            return "*Campo obrigatório";
        }

        if (nome.length < 2) {
            return "*O campo deve conter no mínimo dois caracteres";
        }

        if (nome.length > 100) {
            return "*O campo deve conter no maximo 100 caracteres";
        }

        return null;
    }

    static validarDescricao(descricao){
        if (!descricao) {
            return "*Campo obrigatório";
        }

        if (descricao.length < 2) {
            return "*O campo deve conter no mínimo dois caracteres";
        }

        if (descricao.length > 1000) {
            return "*O campo deve conter no maximo 100 caracteres";
        }

        return null;
    }

    static validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            console.log("*Email inválido!");
            return "*Email inválido!";
        }

        return null;
    }

    static validarSenha(senha) {
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temEspecial = /[^a-zA-Z0-9]/.test(senha);

        if (!temMaiuscula) {
            console.log("*A senha deve conter ao menos uma letra maiúscula.");
            return "*A senha deve conter ao menos uma letra maiúscula.";
        }
        if (!temMinuscula) {
            console.log("*A senha deve conter ao menos uma letra minúscula.");
            return "*A senha deve conter ao menos uma letra minúscula.";
        }
        if (!temEspecial) {
            console.log("*A senha deve conter ao menos um caractere especial.");
            return "*A senha deve conter ao menos um caractere especial.";
        }
        if (senha.length < 8) {
            console.log("*A senha deve conter ao menos 8 caracteres");
            return "*A senha deve conter ao menos 8 caracteres";
        }

        return null;
    }

    static validarSenhaConfi(senha, senha_confi) {
        if (senha !== senha_confi) {
            console.log("*As senhas não coincidem, por favor verifique se estão iguais");
            return "*As senhas não coincidem, por favor verifique se estão iguais";
        }

        return null;
    }

    static validarCpf(cpf) {
        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            console.log("*CPF inválido!");
            return "*CPF inválido!";
        }

        return null;
    }

    static validarSelect(select) {
        if (!select) return "*Por favor, selecione uma opção";
        return null;
    }

    static validarCep(cep) {
        const cepLimpo = cep.replace(/\D/g, "");
        if (!/^[0-9]{8}$/.test(cepLimpo)) return "*Cep inválido!"
    }

    static validarNumeroCasa(numero) {

        if (!numero || numero.trim() === "") {
            return "O número da casa é obrigatório.";
        }

        const numeroInt = parseInt(numero, 10);
        if (isNaN(numeroInt) || numeroInt <= 0) {
            return "*Informe um número de casa válido";
        }

        return null;

    }

    static validarPreco(preco) {
        const regex = /^\d{1,5}(,\d{1,2})?$/;

        if (!regex.test(preco)) return "*Preço inválido!";

        return null;
    }

    static validarImagem(arquivo) {
        if (!arquivo) {
            return "*Campo obrigatório";
        }

        const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];

        if (!tiposPermitidos.includes(arquivo.type)) {
            return "*Arquivo inválido. Selecione uma imagem (jpg, png, gif, bmp, webp).";
        }

        return null;
    }

    static validarArray(arrayTamanho) {
        if (arrayTamanho.length === 0) {
            return "*Por favor, selecione ao menos uma opção"
        } else {
            return null;
        }
    }


}
