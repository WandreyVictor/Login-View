export const formValidation = {
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
    },

    validatePassword : (event) => {
        const input = event.currentTarget;
        const submitButton = document.querySelector('.form_submit');

        if(input.value.length < 8) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else{
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove("error");
        }
    },
    
}