export class Produto {
  constructor(nome, descricao, precoUnitario, categoria, imagem ) {
    this.nome = nome;
    this.descricao = descricao;
    this.precoUnitario = precoUnitario;
    this.categoria = categoria;
    this.imagem = imagem; // Pode ser um base64 string ou ArrayBuffer, conforme sua escolha
  }

  toJSON() {
    return {
      nome: this.nome,
      descricao: this.descricao,
      precoUnitario: this.precoUnitario,
      categoria: this.categoria,
      imagem: this.imagem,
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
