function onLogin() {
    var text = document.getElementById("nameText").value
    var password = document.getElementById("passwdText").value
    if (text && password) {
        //CALL SERVER
        console.log("Text : ", text, "password :", password);
    }
}

function onSignup() {
    var signUpName = document.getElementById("signUpName").value
    var signUpEmail = document.getElementById("signUpEmail").value
    var signUpPassword = document.getElementById("signUpPassword").value
    if (signUpName && signUpEmail && signUpPassword) {
        //CALL SERVER
        console.log("Text : ", signUpName, "EMAIL : ", signUpPassword, " password :", signUpPassword);
    }
}