import httpClient from "../Config/AxiosClient.js";



export class ItemSimulacaoGateway {
  async create(ItemSimulacao) {
    return httpClient.post('/ItemSimulacao', ItemSimulacao.toJSON());
  }

  async update(ItemSimulacaoId, ItemSimulacao) {
    return httpClient.put(`/ItemSimulacao/${ItemSimulacaoId}`, ItemSimulacao.toJSON());
  }

  async delete(ItemSimulacaoId) {
    return httpClient.delete(`/ItemSimulacao/${ItemSimulacaoId}`);
  }

  async getById(ItemSimulacaoId) {
    return httpClient.getById(`/ItemSimulacao/${ItemSimulacaoId}`);
  }

  async listAll() {
    return httpClient.get('/ItemSimulacao');
  }
}
