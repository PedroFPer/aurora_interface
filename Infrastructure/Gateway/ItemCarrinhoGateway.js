import httpClient from "../Config/AxiosClient.js";
import { ItemCarrinho } from "../Entities/ItemCarrinho.js";

export class ItemCarrinhoGateway {
  async create(itemCarrinho) {
    const { data } = await httpClient.post('/itemCarrinho', itemCarrinho.toJSON());
    return ItemCarrinho.fromJSON(data);
  }

  async update(itemCarrinhoId, itemCarrinho) {
    const { data } = await httpClient.put(`/itemCarrinho/${itemCarrinhoId}`, itemCarrinho.toJSON());
    return ItemCarrinho.fromJSON(data);
  }

  async delete(itemCarrinhoId) {
    return httpClient.delete(`/itemCarrinho/${itemCarrinhoId}`);
  }

  async getById(itemCarrinhoId) {
    const { data } = await httpClient.get(`/itemCarrinho/${itemCarrinhoId}`);
    return ItemCarrinho.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/itemCarrinho');
    return data.map(ItemCarrinho.fromJSON);
  }
}
