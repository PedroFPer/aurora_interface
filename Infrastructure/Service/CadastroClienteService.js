import { ClienteGateway} from "../Gateway/ClienteGateway.js"

export class CadastroClienteService{
    constructor(){
        this.gateway = new ClienteGateway();
    }

    async cadastrar(cliente){
        return await this.gateway.create(cliente)
    }
}