import { FuncionarioGateway } from "../Gateway/FuncionarioGateway.js"
class LoginFuncionario{
    
    constructor(email,password){
        this.clienteGateway = new ClienteGateway()
        this.email=email
        this.password=password
    }
    verificar_login(){
        this.clienteGateway.getByEmail(this.email)
        
    }
}