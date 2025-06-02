export class Funcionario {
  constructor(id= null,nomeCompleto, email, senha, cpf, cargo, status=null) {
    this.id = id
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.cargo = cargo;
    this.status = status;
  }

  toJSON() {
    return {
      id: this.id,
      nomeCompleto: this.nomeCompleto,
      email: this.email,
      senha: this.senha,
      cpf: this.cpf,
      cargo: this.cargo,
      status: this.status,
    };
  }

  static fromJSON(json) {
    return new Funcionario(
      json.id,
      json.nomeCompleto,
      json.email,
      json.senha,
      json.cpf,
      json.cargo,
      json.status
    );
  }
}
