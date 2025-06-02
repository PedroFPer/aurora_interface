export function verificarPersistence() {
    const userType = sessionStorage.getItem("userType");
    const clienteJSON = sessionStorage.getItem("clienteInfo");

     console.log("userType:", userType);
    console.log("clienteInfo:", clienteJSON);

    if (userType == null) {
        return "deslogado";
    } else {
        const clienteInfoParsed = clienteJSON ? JSON.parse(clienteJSON) : null;

        if (userType === "costumer") {
            const clienteInfo = { userType: "costumer", cliente: clienteInfoParsed };
            return clienteInfo;
        } else if (userType === "employer") {
            const cargo = clienteInfoParsed?.cargo;
            const clienteInfo = { userType: "employer", cliente: clienteInfoParsed, cargo };
            return clienteInfo;
        }
    }

    return "deslogado"; 
}
