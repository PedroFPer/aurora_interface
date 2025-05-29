import { ClienteGateway} from "../Gateway/ClienteGateway.js"

export class CadastroCliente{
    constructor(){
        this.gateway = new ClienteGateway();
    }

    async cadastrar(cliente){
        return await this.gateway.create(cliente)
    }
}