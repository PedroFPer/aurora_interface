export class Produto {
  constructor(nome, descricao, precoUnitario, categoria, imagem, id = null, tamanhos = []) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.precoUnitario = parseFloat(precoUnitario);
    this.categoria = categoria;
    this.imagem = imagem;
    this.tamanhos = tamanhos;
  }

  toJSON() {
    const json = {
      nome: this.nome,
      descricao: this.descricao,
      precoUnitario: this.precoUnitario,
      categoria: this.categoria,
      imagem: Array.isArray(this.imagem) ? this.imagem : Array.from(this.imagem),
      tamanhos: this.tamanhos.map(t => ({ tamanho: t })) 
    };
    if (this.id !== null) {
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
      json.id || null,
      json.tamanhos?.map(t => t.tamanho) || []
    );
  }
}
