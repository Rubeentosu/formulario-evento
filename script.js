function validarUsuario(usuario){

}

function validarApellidos(){
    
}

function validarEdad(edad){

}

function validarEmail(mail){
    const rege = /^[a-zA-Z0-9_.-]+@[a-z0-9_-]+(\.[a-z]{2,4}){1,2}$/ ;
    return rege.test(mail);
}