import { EnderecoGateway } from "../Gateway/EnderecoGateway.js"

export class CadastroEnderecoService{
    constructor(){
        this.gateway = new EnderecoGateway();
    }

    async cadastrar(endereco){
        return await this.gateway.create(endereco)
    }
}