import httpClient from "../Config/AxiosClient.js";



export class ItemCarrinhoGateway {
  async create(ItemCarrinho) {
    return httpClient.post('/itemCarrinho', ItemCarrinho.toJSON());
  }

  async update(ItemCarrinhoId, ItemCarrinho) {
    return httpClient.put(`/itemCarrinho/${ItemCarrinhoId}`, ItemCarrinho.toJSON());
  }

  async delete(ItemCarrinhoId) {
    return httpClient.delete(`/itemCarrinho/${ItemCarrinhoId}`);
  }

  async getById(ItemCarrinhoId) {
    return httpClient.getById(`/itemCarrinho/${ItemCarrinhoId}`);
  }

  async listAll() {
    return httpClient.get('/itemCarrinho');
  }
}
