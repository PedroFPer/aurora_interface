import httpClient from "../Config/AxiosClient.js";



export class EnderecoGateway {
  async create(Endereco) {
    return httpClient.post('/Endereco', Endereco.toJSON());
  }

  async update(EnderecoId, Endereco) {
    return httpClient.put(`/Endereco/${EnderecoId}`, Endereco.toJSON());
  }

  async delete(EnderecoId) {
    return httpClient.delete(`/Endereco/${EnderecoId}`);
  }

  async getById(EnderecoId) {
    return httpClient.getById(`/Endereco/${EnderecoId}`);
  }

  async listAll() {
    return httpClient.get('/Endereco');
  }
}
