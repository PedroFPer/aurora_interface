import { Produto} from "./Infrastructure/Entities/Produto.js";
import { ProdutoGateway } from "./Infrastructure/Gateway/ProdutoGateway.js";
//const cliente= new Cliente("Pedro69","pedro234@gmail.com","maria123")
const imagemEmBytes = [137, 80, 78, 71, 13, 10, 26, 10];
const produtoTeste = new Produto(
  "Camiseta Estilosa",
  "Camiseta de algodão com estampa moderna e confortável.",
  49.90,
  "Roupas",
  imagemEmBytes
);
const produtoGateway = new ProdutoGateway();

produtoGateway.create(produtoTeste)
  .then(response => console.log("Produto salvo:", response))
  .catch(error => console.error("Erro ao salvar cliente:", error));
  
//produtoGateway.listAll()
  //.then(response => console.log("produto encontrado:", response))
  //.catch(error => console.error("Erro ao salvar cliente:", error));

  //Aquele que mexer nesse codigo terá o cu comido 