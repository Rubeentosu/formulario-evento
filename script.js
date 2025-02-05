window.onload = iniciar;

function iniciar() {
    console.log("hola");
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validar(e){
    console.log("validar");
    let error="";
    if(!validarNombre(document.getElementById("nombre"))){
        error="Nombre no valido."
    }
    if(!validarApellidos(document.getElementById("apellidos"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Apellidos no validos.";
    }
    let edad=validarEdad(document.getElementById("edad"));
    if(edad!=""){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+edad;
    }
    if(!validarApellidos(document.getElementById("email"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Email no valido.";
    }
    if(!validarProvincia(document.getElementById("provincia"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Provincia no valida.";
    }
    if(!validarImg(document.getElementById("img"))){
        if(error!=""){
            error=error+"<br>";
        }
        error=error+"Imagen no valida.";
    }

    document.getElementById("error").innerHTML=error;
        e.preventDefault();
        return false;
    if (error!=""){
        document.getElementById("error").innerHTML=error;
        e.preventDefault();
        return false;
    }else{
        return true;
    }
}

function validarNombre(nombre){
    console.log("nombre");
    const rege = /[a-zA-Z0-9_.-]{4,20}/ ;
    return rege.test(nombre.value);
}

function validarApellidos(apellidos){
    const rege = /^[a-zA-Z0-9_.-]+@[a-z0-9_-]+(\.[a-z]{2,4}){1,2}$/ ;
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
    let formato=img.type;
    if (formato=="image/png"){
        return true;
    }
    return false;
}