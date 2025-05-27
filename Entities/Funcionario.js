export class Funcionario {
  constructor(nome_completo, email, senha, cargo, status) {
    this.nome_completo = nome_completo;
    this.email = email;
    this.senha = senha;
    this.cargo = cargo; // Enum esperado
    this.status = status;
  }
}