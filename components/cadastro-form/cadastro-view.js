import { cadastroController } from './cadastro-controller.js'

window.cadastroController = cadastroController;
function cadastroView(){
    return `
    <section class="form">
    <div class="form_container">
        <h1 class="form_title">Cadastrar</h1>
        <form class="form_form">
            <input id="regName" class="form_input" type="name" placeholder="nome completo">
            <span class="form_input-border"></span>
            <input id="regEmail"class="form_input" type="email" placeholder="e-mail">
            <span class="form_input-border"></span>
            <input id="regPassword"class="form_input" type="password" placeholder="senha">
            <span class="form_input-border"></span>
            <input id="regBirthDate"class="form_input" type="date" name="birth_date" placeholder="data de nacimento">
            <span class="form_input-border"></span>
            <button class="form_submit" onclick="cadastroController.register(event)" >Cadastrar</button>
            <a id="possuocadastro" class="form_reset" href="#" onclick="cadastroController.toLogin()">Já sou Cadastrado?</a>
        
        </form>
        </div>
        
</section> `;
}
export {cadastroView} 