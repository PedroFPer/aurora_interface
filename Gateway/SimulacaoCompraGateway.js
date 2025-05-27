import httpClient from "../Config/AxiosClient.js";



export class SimulacaoCompraGateway {
  async create(SimulacaoCompra) {
    return httpClient.post('/simulacaoCompra', SimulacaoCompra.toJSON());
  }

  async update(SimulacaoCompraId, SimulacaoCompra) {
    return httpClient.put(`/simulacaoCompra/${SimulacaoCompraId}`, SimulacaoCompra.toJSON());
  }

  async delete(SimulacaoCompraId) {
    return httpClient.delete(`/simulacaoCompra/${SimulacaoCompraId}`);
  }

  async getById(SimulacaoCompraId) {
    return httpClient.getById(`/simulacaoCompra/${SimulacaoCompraId}`);
  }

  async listAll() {
    return httpClient.get('/simulacaoCompra');
  }
}
