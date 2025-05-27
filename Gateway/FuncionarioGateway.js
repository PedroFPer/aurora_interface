import httpClient from "../Config/AxiosClient.js";



export class FuncionarioGateway {
  async create(Funcionario) {
    return httpClient.post('/funcionario', Funcionario.toJSON());
  }

  async update(FuncionarioId, Funcionario) {
    return httpClient.put(`/funcionario/${FuncionarioId}`, Funcionario.toJSON());
  }

  async delete(FuncionarioId) {
    return httpClient.delete(`/funcionario/${FuncionarioId}`);
  }

  async getById(FuncionarioId) {
    return httpClient.getById(`/funcionario/${FuncionarioId}`);
  }
async getById(FuncionarioCPF) {
    return httpClient.getById(`/funcionario/${FuncionarioCPF}`);
  }

  async listAll() {
    return httpClient.get('/funcionario');
  }
}
