export class ItemCarrinho {
  constructor(carrinho_id, produto_id, quantidade, preco_unitario) {
    this.carrinho_id = carrinho_id; // FK
    this.produto_id = produto_id; // FK
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
  }
}