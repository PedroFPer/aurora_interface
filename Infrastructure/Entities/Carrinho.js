export class Carrinho {
  constructor(cliente_id, valor_total, list = []) {
    this.cliente_id = cliente_id;
    this.valor_total = valor_total;
    this.list = list;
  }

  toJSON() {
    return {
      cliente_id: this.cliente_id,
      valor_total: this.valor_total,
      list: this.list,
    };
  }

  static fromJSON(json) {
    return new Carrinho(
      json.cliente_id,
      json.valor_total,
      json.list || []
    );
  }
}
