import { registerUser } from "../../services/user-register-service.js"

export const cadastroService = {
    registerUser: () => {
       let name = document.getElementById("regName").value
       let email = document.getElementById("regEmail").value
       let password = document.getElementById("regPassword").value
       let birthDate = document.getElementById("regBirthDate").value
       registerUser({ name, email, pass:password, birthDate})
    },
}