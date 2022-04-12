import { cadastroView } from './../cadastro-form/cadastro-view.js'

export const loginController = {
    
    toRegister: (event) => {
        let main = document.getElementById("main")
        event.preventDefault()
        main.innerHTML = cadastroView()
    },

    emailValid : (event) =>{
        const submitButton = document.querySelector('.form_submit');
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }
}