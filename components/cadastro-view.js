function cadastroView(){
    return `
    <section class="form">
    <div class="form_container">
        <h1 class="form_title">Cadastrar</h1>
        <form class="form_form">
            <input class="form_input" type="name" placeholder="nome completo">
            <span class="form_input-border"></span>
            <input class="form_input" type="email" placeholder="e-mail">
            <span class="form_input-border"></span>
            <input class="form_input" type="password" placeholder="senha">
            <span class="form_input-border"></span>
            <input class="form_input" type="birth_date" placeholder="data de nacimento">
            <span class="form_input-border"></span>
            <button class="form_submit">Cadastrar</button>
            <a id="possuocadastro" class="form_reset" href="#">Já sou Cadastrado?</a>
        
        </form>
        </div>
        
</section> `;
}
export {cadastroView} 