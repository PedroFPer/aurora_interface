import httpClient from "../Config/AxiosClient.js";
import { SimulacaoCompra } from "../Entities/SimulacaoCompra.js";

export class SimulacaoCompraGateway {
  async create(simulacaoCompra) {
    const { data } = await httpClient.post('/simulacaoCompra', simulacaoCompra.toJSON());
    return SimulacaoCompra.fromJSON(data);
  }

  async update(simulacaoCompraId, simulacaoCompra) {
    const { data } = await httpClient.put(`/simulacaoCompra/${simulacaoCompraId}`, simulacaoCompra.toJSON());
    return SimulacaoCompra.fromJSON(data);
  }

  async delete(simulacaoCompraId) {
    return httpClient.delete(`/simulacaoCompra/${simulacaoCompraId}`);
  }

  async getById(simulacaoCompraId) {
    const { data } = await httpClient.get(`/simulacaoCompra/${simulacaoCompraId}`);
    return SimulacaoCompra.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/simulacaoCompra');
    return data.map(SimulacaoCompra.fromJSON);
  }
}
