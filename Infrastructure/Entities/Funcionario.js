export class Funcionario {
  constructor(nome_completo, email, senha, cargo, status) {
    this.nome_completo = nome_completo;
    this.email = email;
    this.senha = senha;
    this.cargo = cargo;
    this.status = status;
  }

  toJSON() {
    return {
      nome_completo: this.nome_completo,
      email: this.email,
      senha: this.senha,
      cargo: this.cargo,
      status: this.status,
    };
  }

  static fromJSON(json) {
    return new Funcionario(
      json.nome_completo,
      json.email,
      json.senha,
      json.cargo,
      json.status
    );
  }
}
