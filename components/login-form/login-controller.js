import { cadastroView } from './../cadastro-form/cadastro-view.js'
import { formValidation } from '../../Util/form-validation.js'

export const loginController = {
    
    toRegister: (event) => {
        let main = document.getElementById("main")
        event.preventDefault()
        main.innerHTML = cadastroView()
    },

    emailValid : (event) =>{
       formValidation.emailValid(event)
    },

    validatePassword : (event) => {
       formValidation.validatePassword(event) 
    },
}