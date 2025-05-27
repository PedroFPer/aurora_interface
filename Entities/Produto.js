export class Produto {
  constructor(nome, descricao, preco_unitario, categoria, imagens = []) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco_unitario = preco_unitario;
    this.categoria = categoria; // Pode ser string ou categoria_id
    this.imagens = imagens; // Lista de URLs
  }
}