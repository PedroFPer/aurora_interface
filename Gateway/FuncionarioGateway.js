import httpClient from "../Config/AxiosClient.js";



export class FuncionarioGateway {
  async create(Funcionario) {
    return httpClient.post('/Funcionario', Funcionario.toJSON());
  }

  async update(FuncionarioId, Funcionario) {
    return httpClient.put(`/Funcionario/${FuncionarioId}`, Funcionario.toJSON());
  }

  async delete(FuncionarioId) {
    return httpClient.delete(`/Funcionario/${FuncionarioId}`);
  }

  async getById(FuncionarioId) {
    return httpClient.getById(`/Funcionario/${FuncionarioId}`);
  }

  async listAll() {
    return httpClient.get('/Funcionario');
  }
}
