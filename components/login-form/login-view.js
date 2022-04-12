import { loginController } from './login-controller.js'

window.loginController = loginController;
function loginView(){
return `
<section class="form">
<div class="form_container">
    <h1 class="form_title">Login</h1>
    <form class="form_form">
        <input class="form_input" type="email" placeholder="e-mail" onkeyup="loginController.emailValid(event)">
        <span class="form_input-border"></span>
        <input class="form_input" type="password" placeholder="senha">
        <span class="form_input-border"></span>
        <button class="form_submit">Login</button>
        <button id="btncadastro" class="form_submit" onclick="loginController.toRegister(event)">Não possuo cadastro</button>
        <a class="form_reset" href="a">Esqueci a Senha?</a>
    </form>
    </div> 
    
</section>`;
}
export{loginView}