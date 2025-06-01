import { ProdutoGateway } from "../Gateway/ProdutoGateway.js";

export class ListarProdutosService {
  constructor() {
    this.gateway = new ProdutoGateway();
  }

  async executar() {
    return await this.gateway.listAll();
  }
}