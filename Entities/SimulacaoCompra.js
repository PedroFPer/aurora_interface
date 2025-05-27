export class SimulacaoCompra {
  constructor(cliente_id, data_simulacao, valor_total, status, endereco_id, list = []) {
    this.cliente_id = cliente_id; // FK
    this.data_simulacao = data_simulacao;
    this.valor_total = valor_total;
    this.status = status;
    this.endereco_id = endereco_id; // FK
    this.list = list; // Lista de itens simulados
  }
  toJSON() {
    return {
      cliente_id: this.cliente_id,
      data_simulacao: this.data_simulacao,
      valor_total: this.valor_total,
      status: this.status,
      endereco_id: this.endereco_id,
      list: this.list,
      }
    }
}