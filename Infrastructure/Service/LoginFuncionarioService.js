import { FuncionarioGateway } from "../Gateway/FuncionarioGateway.js"

class LoginFuncionario{
    
    constructor(cpf,password){
        this.funcionarioGateway = new FuncionarioGateway()
        this.cpf=cpf
        this.password=password
    }
    async verificar_login() {
    const funcionario = await this.funcionarioGateway.getByCpf(this.cpf);
    if (funcionario && funcionario.senha === this.password) {
        console.log("Login válido");
        return true
    } else {
        console.log("CPF ou senha inválidos");
        return false
        }
    }
}