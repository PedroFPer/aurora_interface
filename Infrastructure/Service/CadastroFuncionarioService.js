import { FuncionarioGateway} from "../Gateway/FuncionarioGateway.js"

export class CadastroFuncionarioService{
    constructor(){
        this.gateway = new FuncionarioGateway();
    }

    async cadastrar(funcionario){
        return await this.gateway.create(funcionario)
    }
}