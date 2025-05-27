export class Carrinho {
  constructor(cliente_id, valor_total, list = []) {
    this.cliente_id = cliente_id; // FK (único)
    this.valor_total = valor_total;
    this.list = list; // Lista de itens no carrinho
  }
}