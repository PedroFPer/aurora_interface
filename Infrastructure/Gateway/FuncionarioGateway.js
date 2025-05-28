import httpClient from "../../Config/AxiosClient.js";
import { Funcionario } from "../Entities/Funcionario.js";

export class FuncionarioGateway {
  async create(funcionario) {
    const { data } = await httpClient.post('/funcionario', funcionario.toJSON());
    return Funcionario.fromJSON(data);
  }

  async update(funcionarioId, funcionario) {
    const { data } = await httpClient.put(`/funcionario/${funcionarioId}`, funcionario.toJSON());
    return Funcionario.fromJSON(data);
  }

  async delete(funcionarioId) {
    return httpClient.delete(`/funcionario/${funcionarioId}`);
  }

  async getById(funcionarioId) {
    const { data } = await httpClient.get(`/funcionario/${funcionarioId}`);
    return Funcionario.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/funcionario');
    return data.map(Funcionario.fromJSON);
  }
}
