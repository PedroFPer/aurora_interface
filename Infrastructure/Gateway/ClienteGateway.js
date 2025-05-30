import httpClient from "../../Config/AxiosClient.js";
import { Cliente } from "../Entities/Cliente.js";

export class ClienteGateway {
  async create(cliente) {
    const { data } = await httpClient.post('/cliente', cliente.toJSON());
    return Cliente.fromJSON(data);
  }

  async update(clienteId, cliente) {
    const { data } = await httpClient.put(`/cliente/${clienteId}`, cliente.toJSON());
    return Cliente.fromJSON(data);
  }

  async delete(clienteId) {
    return httpClient.delete(`/cliente/${clienteId}`);
  }

  async getById(clienteId) {
    const { data } = await httpClient.get(`/cliente/${clienteId}`);
    return Cliente.fromJSON(data);
  }

  async getByEmail(clienteEmail) {
    const { data } = await httpClient.get(`/cliente/email/${clienteEmail}`);
    return Cliente.fromJSON(data);
  }

  async listAll() {
    const { data } = await httpClient.get('/cliente');
    return data.map(Cliente.fromJSON); // retorna array de objetos Cliente
  }
}
