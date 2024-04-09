function validateForm(){
    var name=document.getElementById("nom").value;
    var email= document.getElementById("email").value;
    var modePasse=document.getElementById("psw").value;
    var anniv=document.getElementById("birth").value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var modeError = document.getElementById('modeError');
    var birthError = document.getElementById('birthError');
   

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    modeError.innerHTML = "";
    birthError.innerHTML = ""

    var isValid = true;

    if (name === "") {
        nameError.innerHTML = "Entre a valid name";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Entre a valid email adress";
        isValid = false;
    }
    if (modePasse === "") {
        modeError.innerHTML = "Entre votre mode passe";
        isValid = false;
    }

    if (anniv=== "") {
        birthError.innerHTML = "Select your date of birth";
        isValid = false;
    }
    return isValid;
}
