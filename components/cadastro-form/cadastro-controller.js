import { cadastroService } from "./cadastro-service.js"
import { loginView } from "../login-form/login-view.js"

export const cadastroController = {
    
    toLogin: () => {
        let main = document.getElementById("main")
        main.innerHTML = loginView()
    },
    register:(event)=>{
        event.preventDefault()
        cadastroService.registerUser();
    }
}
