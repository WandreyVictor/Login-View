export const registerUser = (body) => {
    fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'No-Cors':""
        },
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response)
       if (response.status !== 200) {
           return errorHandler();
       }
       successHandler();
    }).catch(() => {
        errorHandler();
    })
}