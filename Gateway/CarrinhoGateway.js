import httpClient from "../Config/AxiosClient.js";



export class CarrinhoGateway {
  async create(Carrinho) {
    return httpClient.post('/carrinho', Carrinho.toJSON());
  }

  async update(CarrinhoId, Carrinho) {
    return httpClient.put(`/carrinho/${CarrinhoId}`, Carrinho.toJSON());
  }

  async delete(CarrinhoId) {
    return httpClient.delete(`/carrinho/${CarrinhoId}`);
  }

  async getById(CarrinhoId) {
    return httpClient.getById(`/carrinho/${CarrinhoId}`);
  }

  async listAll() {
    return httpClient.get('/carrinho');
  }
}
