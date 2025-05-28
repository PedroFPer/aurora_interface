import httpClient from "../Config/AxiosClient.js";
import { ItemSimulacao } from "../Entities/ItemSimulacao.js";

export class ItemSimulacaoGateway {
  async create(itemSimulacao) {
    const { data } = await httpClient.post('/itemSimulacao', itemSimulacao.toJSON());
    return ItemSimulacao.fromJSON(data);
  }

  async update(itemSimulacaoId, itemSimulacao) {
    const { data } = await httpClient.put(`/itemSimulacao/${itemSimulacaoId}`, itemSimulacao.toJSON());
    return ItemSimulacao.fromJSON(data);
  }

  async delete(itemSimulacaoId) {
    return httpClient.delete(`/itemSimulacao/${itemSimulacaoId}`);
  }

  async getById(itemSimulacaoId) {
    const { data } = await httpClient.get(`/itemSimulacao/${itemSimulacaoId}`);
    return ItemSimulacao.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/itemSimulacao');
    return data.map(ItemSimulacao.fromJSON);
  }
}
