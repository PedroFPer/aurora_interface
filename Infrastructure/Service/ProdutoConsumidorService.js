import { ProdutoGateway } from "../Gateway/ProdutoGateway.js";

export class ProdutoConsumidorService {
  constructor() {
    this.gateway = new ProdutoGateway();
  }

  async executar(id) {
    return await this.gateway.getById(id);
  }
}