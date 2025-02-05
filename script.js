window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validar(e){
    let error="";
    if(!validarNombre(document.getElementById("nombre"))){
        error="Nombre no valido."
        document.getElementById("nombre").style.border="2px solid red";
    }else{
        document.getElementById("nombre").style.border="2px solid green";
    }
    if(!validarApellidos(document.getElementById("apellidos"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Apellidos no validos.";
        document.getElementById("apellidos").style.border="2px solid red";
    }else{
        document.getElementById("apellidos").style.border="2px solid green";
    }
    let edad=validarEdad(document.getElementById("edad"));
    if(edad!=""){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+edad;
        document.getElementById("edad").style.border="2px solid red";
    }else{
        document.getElementById("edad").style.border="2px solid green";
    }
    if(!validarEmail(document.getElementById("email"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Email no valido.";
        document.getElementById("email").style.border="2px solid red";
    }else{
        document.getElementById("email").style.border="2px solid green";
    }
    if(!validarProvincia(document.getElementById("provincia"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Provincia no valida.";
        document.getElementById("provincia").style.border="2px solid red";
    }else{
        document.getElementById("provincia").style.border="2px solid green";
    }
    if(!validarImg(document.getElementById("img"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Imagen no valida.";
        document.getElementById("img").style.border="2px solid red";
    }else{
        document.getElementById("img").style.border="2px solid green";
    }
    if (error!=""){
        document.getElementById("error").innerHTML=error;
        e.preventDefault();
        return false;
    }else{
        return true;
    }
}

function validarNombre(nombre){
    const rege = /[a-zA-Z0-9_.-]{4,20}/ ;
    return rege.test(nombre.value);
}

function validarApellidos(apellidos){
    const rege = /[a-zA-Z0-9_.-]{4,40}/ ;
    return rege.test(apellidos.value);
}

function validarEdad(edad){
    let resul="";
    if (edad.value>0&&edad.value<18){
        resul="Debes ser mayor de edad.";
    }else if(edad.value>18&&edad.value<120){

    }else{
        resul="Edad no valida";
    }
    return resul;
}

function validarEmail(email){
    const rege = /^[a-zA-Z0-9_.-]+@[a-z0-9_-]+(\.[a-z]{2,4}){1,2}$/ ;
    return rege.test(email.value);
}

function validarProvincia(provincia){
    const rege = /[a-zA-Z0 ]{4,20}/ ;
    return rege.test(provincia.value);
}

function validarImg(img){
    if(img.value!=""){
        let formato=img.files[0].type;
        if (formato=="image/png"){
            return true;
        }
    }
    return false;
}