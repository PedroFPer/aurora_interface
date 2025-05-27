export class Cliente {
  constructor(nome_completo, email, senha, carrinho_id = null) {
    this.nome_completo = nome_completo;
    this.email = email;
    this.senha = senha;
    this.carrinho_id = carrinho_id; // FK (1:1)
  }
  toJSON() {
    return {
      nome_completo: this.nome_completo,
      email: this.email,
      senha: this.senha,
      
    };
  }

}