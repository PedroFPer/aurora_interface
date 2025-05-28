export class Cliente {
  constructor(nome_completo, email, senha, carrinho_id = null) {
    this.nome_completo = nome_completo;
    this.email = email;
    this.senha = senha;
    this.carrinho_id = carrinho_id;
  }

  toJSON() {
    return {
      nomeCompleto: this.nome_completo,
      email: this.email,
      senha: this.senha,
    };
  }

  static fromJSON(json) {
    return new Cliente(
      json.nomeCompleto || json.nome_completo,
      json.email,
      json.senha,
      json.carrinho_id || null
    );
  }
}
