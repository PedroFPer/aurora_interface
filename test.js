import { Cliente} from "./Entities/Cliente.js";
import { ClienteGateway } from "./Gateway/ClienteGateway.js";
const cliente= new Cliente("Maria","Maria234@gmail.com","maria123")
const clienteGateway = new ClienteGateway();

//clienteGateway.create(cliente)
  //.then(response => console.log("Cliente salvo:", response))
  //.catch(error => console.error("Erro ao salvar cliente:", error));
clienteGateway.getByEmail("Maria234@gmail.com")
  .then(response => console.log("Cliente encontrado:", response))
  .catch(error => console.error("Erro ao salvar cliente:", error));
  //Aquele que mexer nesse codigo terá o cu comido 