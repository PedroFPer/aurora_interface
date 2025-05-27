import httpClient from "../Config/AxiosClient.js";



export class ProdutoGateway {
  async create(Produto) {
    return httpClient.post('/Produto', Produto.toJSON());
  }

  async update(ProdutoId, Produto) {
    return httpClient.put(`/Produto/${ProdutoId}`, Produto.toJSON());
  }

  async delete(ProdutoId) {
    return httpClient.delete(`/Produto/${ProdutoId}`);
  }

  async getById(ProdutoId) {
    return httpClient.getById(`/Produto/${ProdutoId}`);
  }

  async listAll() {
    return httpClient.get('/Produto');
  }
}
