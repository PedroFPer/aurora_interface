import { ProdutoGateway} from "../Gateway/ProdutoGateway.js"

export class AdicionarProdutoService{
    constructor(){
        this.gateway = new ProdutoGateway();
    }

    async cadastrar(produto){
        return await this.gateway.create(produto);
    }
}