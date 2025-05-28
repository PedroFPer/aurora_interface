export class ItemCarrinho {
  constructor(carrinho_id, produto_id, quantidade, preco_unitario) {
    this.carrinho_id = carrinho_id;
    this.produto_id = produto_id;
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
  }

  toJSON() {
    return {
      carrinho_id: this.carrinho_id,
      produto_id: this.produto_id,
      quantidade: this.quantidade,
      preco_unitario: this.preco_unitario,
    };
  }

  static fromJSON(json) {
    return new ItemCarrinho(
      json.carrinho_id,
      json.produto_id,
      json.quantidade,
      json.preco_unitario
    );
  }
}
