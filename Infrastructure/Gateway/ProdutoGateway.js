import httpClient from "../../Config/AxiosClient.js";
import { Produto } from "../Entities/Produto.js";

export class ProdutoGateway {
  async create(produto) {
    if (!(produto instanceof Produto)) {
      throw new Error("Parâmetro 'produto' deve ser uma instância de Produto");
    }
    try {
      const { data } = await httpClient.post('/produto', produto.toJSON());
      return Produto.fromJSON(data);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  }

  async update(produtoId, produto) {
    if (!(produto instanceof Produto)) {
      throw new Error("Parâmetro 'produto' deve ser uma instância de Produto");
    }
    try {
      const { data } = await httpClient.put(`/produto/${produtoId}`, produto.toJSON());
      return Produto.fromJSON(data);
    } catch (error) {
      console.error(`Erro ao atualizar produto ${produtoId}:`, error);
      throw error;
    }
  }

  async delete(produtoId) {
    try {
      return await httpClient.delete(`/produto/${produtoId}`);
    } catch (error) {
      console.error(`Erro ao deletar produto ${produtoId}:`, error);
      throw error;
    }
  }

  async getById(produtoId) {
    try {
      const { data } = await httpClient.get(`/produto/${produtoId}`);
      console.table(data);
      return Produto.fromJSON(data);
    } catch (error) {
      console.error(`Erro ao buscar produto ${produtoId}:`, error);
      throw error;
    }
  }

  async listAll() {
    try {
      const { data } = await httpClient.get('/produto');
      console.table(data);
      if (!Array.isArray(data)) {
        throw new Error("Resposta inválida: esperado array de produtos");
      }
      return data.map(Produto.fromJSON);
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
      throw error;
    }
  }
}
