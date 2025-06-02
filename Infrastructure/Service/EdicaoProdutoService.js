import { ProdutoGateway} from "../Gateway/ProdutoGateway.js"

export class EdicaoProdutoService{
    constructor(){
        this.gateway = new ProdutoGateway();
    }

    async update(produtoId, produto){
        return await this.gateway.update(produtoId, produto);
    }
}