// Add your code here
function submitDate(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => {
            return resp.json();
        })
        .then(object => {
            document.body.innerHTML = odbject["id"];
        })
        .catch(error => {
            document.body.innerHTML = error.message;
        });
}
