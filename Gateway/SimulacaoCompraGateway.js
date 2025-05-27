import httpClient from "../Config/AxiosClient.js";



export class SimulacaoCompraGateway {
  async create(SimulacaoCompra) {
    return httpClient.post('/SimulacaoCompra', SimulacaoCompra.toJSON());
  }

  async update(SimulacaoCompraId, SimulacaoCompra) {
    return httpClient.put(`/SimulacaoCompra/${SimulacaoCompraId}`, SimulacaoCompra.toJSON());
  }

  async delete(SimulacaoCompraId) {
    return httpClient.delete(`/SimulacaoCompra/${SimulacaoCompraId}`);
  }

  async getById(SimulacaoCompraId) {
    return httpClient.getById(`/SimulacaoCompra/${SimulacaoCompraId}`);
  }

  async listAll() {
    return httpClient.get('/SimulacaoCompra');
  }
}
