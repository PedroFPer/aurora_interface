export class Produto {
  constructor(nome, descricao, precoUnitario, categoria, imagem, id = null) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    this.categoria = categoria;
    this.imagem = imagem; 
  }

  toJSON() {
    const json = {
      nome: this.nome,
      descricao: this.descricao,
      precoUnitario: this.precoUnitario,
      categoria: this.categoria,
      imagem: Array.isArray(this.imagem) ? this.imagem : Array.from(this.imagem)
    };
    if(this.id !== null) {
      json.id = this.id;
    }
    return json;
  }

  static fromJSON(json) {
    return new Produto(
      json.nome,
      json.descricao,
      json.precoUnitario,
      json.categoria,
      json.imagem || null,
      json.id || null
    );
  }
}
