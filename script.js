import { loginView } from "./components/login-form/login-view.js";

document.addEventListener('DOMContentLoaded',() =>{
    
    let main = document.getElementById("main")
    main.innerHTML = loginView()
})