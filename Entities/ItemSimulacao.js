export class ItemSimulacao {
  constructor(simulacao_id, produto_id, quantidade, preco_unitario) {
    this.simulacao_id = simulacao_id; // FK
    this.produto_id = produto_id; // FK
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
  }
}