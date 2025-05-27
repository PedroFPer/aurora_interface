import httpClient from "../Config/AxiosClient.js";



export class ItemCarrinhoGateway {
  async create(ItemCarrinho) {
    return httpClient.post('/ItemCarrinho', ItemCarrinho.toJSON());
  }

  async update(ItemCarrinhoId, ItemCarrinho) {
    return httpClient.put(`/ItemCarrinho/${ItemCarrinhoId}`, ItemCarrinho.toJSON());
  }

  async delete(ItemCarrinhoId) {
    return httpClient.delete(`/ItemCarrinho/${ItemCarrinhoId}`);
  }

  async getById(ItemCarrinhoId) {
    return httpClient.getById(`/ItemCarrinho/${ItemCarrinhoId}`);
  }

  async listAll() {
    return httpClient.get('/ItemCarrinho');
  }
}
