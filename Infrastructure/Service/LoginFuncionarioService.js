import { FuncionarioGateway } from "../Gateway/FuncionarioGateway.js"


export class LoginFuncionarioService{
    
    constructor(){
        this.funcionarioGateway= new FuncionarioGateway()
    }
    async verificar_login(cpf,senha) {
    const funcionario = await this.funcionarioGateway.getByCpf(cpf);
    if (funcionario && funcionario.senha === senha) {
        console.log("Login válido");
        return true
    } else {
        console.log("CPF ou senha inválidos");
        return false
        }
    }
}