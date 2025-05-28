import httpClient from "../Config/AxiosClient.js";
import { Carrinho } from "../Entities/Carrinho.js";

export class CarrinhoGateway {
  async create(carrinho) {
    const { data } = await httpClient.post('/carrinho', carrinho.toJSON());
    return Carrinho.fromJSON(data);
  }

  async update(carrinhoId, carrinho) {
    const { data } = await httpClient.put(`/carrinho/${carrinhoId}`, carrinho.toJSON());
    return Carrinho.fromJSON(data);
  }

  async delete(carrinhoId) {
    return httpClient.delete(`/carrinho/${carrinhoId}`);
  }

  async getById(carrinhoId) {
    const { data } = await httpClient.get(`/carrinho/${carrinhoId}`);
    return Carrinho.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/carrinho');
    return data.map(Carrinho.fromJSON);
  }
}
