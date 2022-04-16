export const registerUser = (body) => {
    const submitButton = document.querySelector('.form_submit');
    
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
    
    fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then((response) => {
        response = response.json();
        console.log(response);
        if (response.status !== 200) {
           return errorHandler();
       }
       successHandler();
    }).catch((response) => {
        response = response.json();
        console.log(response);
        console.log(response,x,y,z)
        errorHandler();
    })
}