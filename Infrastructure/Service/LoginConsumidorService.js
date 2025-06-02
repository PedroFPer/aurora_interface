import { ClienteGateway } from "../Gateway/ClienteGateway.js"

 export class LoginConsumidorService{
    constructor(){
        this.clienteGateway = new ClienteGateway()
    }
    
    async verificar_login(email,senha) {
    const consumidor = await this.clienteGateway.getByEmail(email);
    console.table("json", consumidor);
    if (consumidor && consumidor.senha === senha) {
        
        return consumidor;
    } else {
        console.log("Email ou senha inválidos");
        return null;
        }
    }

}