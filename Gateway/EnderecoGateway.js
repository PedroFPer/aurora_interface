import httpClient from "../Config/AxiosClient.js";



export class EnderecoGateway {
  async create(Endereco) {
    return httpClient.post('/endereco', Endereco.toJSON());
  }

  async update(EnderecoId, Endereco) {
    return httpClient.put(`/endereco/${EnderecoId}`, Endereco.toJSON());
  }

  async delete(EnderecoId) {
    return httpClient.delete(`/endereco/${EnderecoId}`);
  }

  async getById(EnderecoId) {
    return httpClient.getById(`/endereco/${EnderecoId}`);
  }

  async listAll() {
    return httpClient.get('/endereco');
  }
}
