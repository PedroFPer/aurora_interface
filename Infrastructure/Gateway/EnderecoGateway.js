import httpClient from "../../Config/AxiosClient.js";
import { Endereco } from "../Entities/Endereco.js";

export class EnderecoGateway {
  async create(endereco) {
    const { data } = await httpClient.post('/endereco', endereco.toJSON());
    return Endereco.fromJSON(data);
  }

  async update(enderecoId, endereco) {
    const { data } = await httpClient.put(`/endereco/${enderecoId}`, endereco.toJSON());
    return Endereco.fromJSON(data);
  }

  async delete(enderecoId) {
    return httpClient.delete(`/endereco/${enderecoId}`);
  }

  async getById(enderecoId) {
    const { data } = await httpClient.get(`/endereco/${enderecoId}`);
    return Endereco.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/endereco');
    return data.map(Endereco.fromJSON);
  }
}
