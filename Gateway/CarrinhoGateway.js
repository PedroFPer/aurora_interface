import httpClient from "../Config/AxiosClient.js";



export class CarrinhoGateway {
  async create(Carrinho) {
    return httpClient.post('/Carrinho', Carrinho.toJSON());
  }

  async update(CarrinhoId, Carrinho) {
    return httpClient.put(`/Carrinho/${CarrinhoId}`, Carrinho.toJSON());
  }

  async delete(CarrinhoId) {
    return httpClient.delete(`/Carrinho/${CarrinhoId}`);
  }

  async getById(CarrinhoId) {
    return httpClient.getById(`/Carrinho/${CarrinhoId}`);
  }

  async listAll() {
    return httpClient.get('/Carrinho');
  }
}
