import httpClient from "../Config/AxiosClient.js";



export class ClienteGateway {
  async create(user) {
    return httpClient.post('/cliente', user.toJSON());
  }

  async update(userId, user) {
    return httpClient.put(`/cliente/${userId}`, user.toJSON());
  }

  async delete(userId) {
    return httpClient.delete(`/cliente/${userId}`);
  }

  async getById(userId) {
    return httpClient.get(`/cliente/${userId}`);
  }
  async getByEmail(userEmail) {
    return httpClient.get(`/cliente/email/${userEmail}`);
  }

  async listAll() {
    return httpClient.get('/cliente');
  }
}
