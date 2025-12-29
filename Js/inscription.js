function verifMDP(pwd){
    const rgx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&#($_)!*]).{8,}$/;
    
    if(!rgx.test(pwd.value)){
        alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial. ");
        pwd1.focus();
        return false;
    }
    return true;
}

function validationInscription(){
    let pwd1=document.getElementById("password1");
    let pwd2=document.getElementById("password2");
    
    resultat = true;
    if (!verifMDP(pwd1)){
         resultat = false;
    }else if (pwd1.value != pwd2.value){
        alert("Les 2 mots de passe ne sont pas identiques");
         resultat = false;
    }
    return resultat;
}