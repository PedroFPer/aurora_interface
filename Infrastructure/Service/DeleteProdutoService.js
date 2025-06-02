import { ProdutoGateway} from "../Gateway/ProdutoGateway.js"

export class DeleteProdutoService{
    constructor(){
        this.gateway = new ProdutoGateway();
    }

    async delete(idProduto){
        return await this.gateway.delete(idProduto);
    }
}