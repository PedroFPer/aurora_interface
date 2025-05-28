import { Cliente} from "./Infrastructure/Entities/Cliente.js";
import { ClienteGateway } from "./Infrastructure/Gateway/ClienteGateway.js";
const cliente= new Cliente("Pedro69","pedro234@gmail.com","maria123")
const clienteGateway = new ClienteGateway();

//clienteGateway.create(cliente)
  //.then(response => console.log("Cliente salvo:", response))
  //.catch(error => console.error("Erro ao salvar cliente:", error));
clienteGateway.getByEmail("pedro234@gmail.com")
  .then(response => console.log("Cliente encontrado:", response))
  .catch(error => console.error("Erro ao salvar cliente:", error));

  //Aquele que mexer nesse codigo terá o cu comido 