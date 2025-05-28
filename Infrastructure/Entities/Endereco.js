export class Endereco {
  constructor(cliente_id, rua, numero, complemento, bairro, cidade, estado, cep) {
    this.cliente_id = cliente_id;
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  toJSON() {
    return {
      cliente_id: this.cliente_id,
      rua: this.rua,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep,
    };
  }

  static fromJSON(json) {
    return new Endereco(
      json.cliente_id,
      json.rua,
      json.numero,
      json.complemento,
      json.bairro,
      json.cidade,
      json.estado,
      json.cep
    );
  }
}
