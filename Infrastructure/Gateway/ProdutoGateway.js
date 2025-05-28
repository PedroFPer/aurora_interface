import httpClient from "../Config/AxiosClient.js";
import { Produto } from "../Entities/Produto.js";

export class ProdutoGateway {
  async create(produto) {
    const { data } = await httpClient.post('/produto', produto.toJSON());
    return Produto.fromJSON(data);
  }

  async update(produtoId, produto) {
    const { data } = await httpClient.put(`/produto/${produtoId}`, produto.toJSON());
    return Produto.fromJSON(data);
  }

  async delete(produtoId) {
    return httpClient.delete(`/produto/${produtoId}`);
  }

  async getById(produtoId) {
    const { data } = await httpClient.get(`/produto/${produtoId}`);
    return Produto.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/produto');
    return data.map(Produto.fromJSON);
  }
}
