import { ClienteGateway } from "../Gateway/ClienteGateway"
class LoginCliente{
    
    constructor(email,password){
        this.clienteGateway = new ClienteGateway()
        this.email=email
        this.password=password
    }
    verificar_login(){
        this.clienteGateway.getByEmail(this.email)
        
    }
}