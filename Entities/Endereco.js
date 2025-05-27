export class Endereco {
  constructor(cliente_id, rua, numero, complemento, bairro, cidade, estado, cep) {
    this.cliente_id = cliente_id; // FK
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }
}