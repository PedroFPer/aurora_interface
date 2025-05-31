export class Produto {
  constructor(nome, descricao, precoUnitario, categoria, imagem ) {
    this.nome = nome;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    this.categoria = categoria;
    this.imagem = imagem; 
  }

  toJSON() {
    return {
      nome: this.nome,
      descricao: this.descricao,
      precoUnitario: this.precoUnitario,
      categoria: this.categoria,
      imagem: Array.isArray(this.imagem) ? this.imagem : Array.from(this.imagem)
    };
  }

  static fromJSON(json) {
    return new Produto(
      json.nome,
      json.descricao,
      json.precoUnitario,
      json.categoria,
      json.imagem || null
    );
  }
}
