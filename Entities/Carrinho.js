export class Carrinho {
  constructor(cliente_id, valor_total, list = []) {
    this.cliente_id = cliente_id; // FK (único)
    this.valor_total = valor_total;
    this.list = list; // Lista de itens no carrinho
  }
  toJSON() {
    return {
      cliente_id: this.cliente_id,
      valor_total: this.valor_total,
      list: this.list,
    };
  }
}