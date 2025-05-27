export class ItemSimulacao {
  constructor(simulacao_id, produto_id, quantidade, preco_unitario) {
    this.simulacao_id = simulacao_id; // FK
    this.produto_id = produto_id; // FK
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
  }
  toJSON() {
    return {
      simulacao_id: this.simulacao_id,
      produto_id: this.produto_id,
      quantidade: this.quantidade,
      preco_unitario: this.preco_unitario,
    };
  }
}