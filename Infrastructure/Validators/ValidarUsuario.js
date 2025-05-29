export class ValidarUsuario {
    static validarNome(nome) {
        if (!nome) {
            console.log("*Campo obrigatório");
            return "*Campo obrigatório";
        }

        if (nome.length < 2 || nome.length > 110) {
            console.log("*O nome deve conter no mínimo dois caracteres");
            return "*O nome deve conter no mínimo dois caracteres";
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

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigito = 11 - (soma % 11);
        if (primeiroDigito > 9) primeiroDigito = 0;
        if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
            console.log("*CPF inválido!");
            return "*CPF inválido!";
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigito = 11 - (soma % 11);
        if (segundoDigito > 9) segundoDigito = 0;
        if (parseInt(cpf.charAt(10)) !== segundoDigito) {
            console.log("*CPF inválido!");
            return "*CPF inválido!";
        }

        return null;
    }
}
