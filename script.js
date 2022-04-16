import { loginView } from "./components/login-form/login-view.js";

document.addEventListener('DOMContentLoaded',() =>{
    
    let main = document.getElementById("main")
    main.innerHTML = loginView()
})

const init = () => {

    const errorHandler = () => {
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Error :(";
    }

    const successHandler = () => {
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Sent! :)";
    }

    if(submitButton) {
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();

            submitButton.textContent = "...Loading";

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
               if (response.status !== 200) {
                   return errorHandler();
               }
               successHandler();
            }).catch(() => {
                errorHandler();
            })
        })
    }
}
window.onload = init; 