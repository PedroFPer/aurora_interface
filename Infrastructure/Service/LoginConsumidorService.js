import { ClienteGateway } from "../Gateway/ClienteGateway.js"

 export class LoginConsumidorService{
    constructor(){
        this.clienteGateway = new ClienteGateway()
    }
    
    async verificar_login(email,senha) {
    const consumidor = await this.clienteGateway.getByEmail(email);
    if (consumidor && consumidor.senha === senha) {
        console.log("Login válido");
        return consumidor;
    } else {
        console.log("Email ou senha inválidos");
        return false
        }
    }

}