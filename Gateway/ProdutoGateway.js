import httpClient from "../Config/AxiosClient.js";



export class ProdutoGateway {
  async create(Produto) {
    return httpClient.post('/produto', Produto.toJSON());
  }

  async update(ProdutoId, Produto) {
    return httpClient.put(`/produto/${ProdutoId}`, Produto.toJSON());
  }

  async delete(ProdutoId) {
    return httpClient.delete(`/produto/${ProdutoId}`);
  }

  async getById(ProdutoId) {
    return httpClient.getById(`/produto/${ProdutoId}`);
  }

  async listAll() {
    return httpClient.get('/produto');
  }
}
