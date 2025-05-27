import httpClient from "../Config/AxiosClient.js";



export class ItemSimulacaoGateway {
  async create(ItemSimulacao) {
    return httpClient.post('/itemSimulacao', ItemSimulacao.toJSON());
  }

  async update(ItemSimulacaoId, ItemSimulacao) {
    return httpClient.put(`/itemSimulacao/${ItemSimulacaoId}`, ItemSimulacao.toJSON());
  }

  async delete(ItemSimulacaoId) {
    return httpClient.delete(`/itemSimulacao/${ItemSimulacaoId}`);
  }

  async getById(ItemSimulacaoId) {
    return httpClient.getById(`/itemSimulacao/${ItemSimulacaoId}`);
  }

  async listAll() {
    return httpClient.get('/itemSimulacao');
  }
}
