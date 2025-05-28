export class Produto {
  constructor(nome, descricao, preco_unitario, categoria, imagens = []) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco_unitario = preco_unitario;
    this.categoria = categoria;
    this.imagens = imagens;
  }

  toJSON() {
    return {
      nome: this.nome,
      descricao: this.descricao,
      preco_unitario: this.preco_unitario,
      categoria: this.categoria,
      imagens: this.imagens,
    };
  }

  static fromJSON(json) {
    return new Produto(
      json.nome,
      json.descricao,
      json.preco_unitario,
      json.categoria,
      json.imagens || []
    );
  }
}
