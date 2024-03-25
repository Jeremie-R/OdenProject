//listen to form
let sendButton = document.getElementById("send");
sendButton.addEventListener('click', sendForm);


//function on click check password and send email thanks
function sendForm() {
    console.log("clicked");

    if (checkPassword() === true) {

        let email = document.getElementById("email");
        let name = document.getElementById('first_name');

        window.open(
            'mailto:' + email.value + 
            '?subject=' + 'funny email' +
            '&body=' + 'hello, ' + name.value);

    }
}

// function to check password
function checkPassword() {
    let originalPassword = document.getElementById("password");
    let repeatedPassword = document.getElementById("passwordRepeat");

    if (originalPassword.value === repeatedPassword.value) {
        repeatedPassword.setCustomValidity('');
        return true;
    } else {
        repeatedPassword.setCustomValidity('Passwords does not match');

        return false;
    }

}