export class Funcionario {
  constructor(nomeCompleto, email, cpf, senha, cargo, status) {
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.cargo = cargo;
    //this.status = status;
  }

  toJSON() {
    return {
      nomeCompleto: this.nomeCompleto,
      email: this.email,
      senha: this.senha,
      cpf: this.cpf,

      cargo: this.cargo,

      //status: this.status,
    };
  }

  static fromJSON(json) {
    return new Funcionario(
      json.nomeCompleto,
      json.email,
      json.senha,
      json.cpf,

      json.cargo,

      //json.status
    );
  }
}
