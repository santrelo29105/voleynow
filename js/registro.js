function registrar(){

    var nombre = document.getElementById("Nombre").value;
    var apellido= document.getElementById("Apellido").value;
    var correo= document.getElementById("Correo").value;
    var posicionF= document.querySelector('input[name="PosicionF"]:checked').value;
    var usuario= document.getElementById("Usuario").value;
    var contraseña= document.getElementById("Contraseña").value;
    var verificar = validarnull(nombre,apellido,correo,posicionF,usuario,contraseña);

    if(verificar == true){
     var setRegister = firebase.database().ref('Usuarios');
     setRegister.child(usuario).set({
        Apellido : apellido,
        Contraseña : contraseña,
        Correo : correo,
        Nombre : nombre,
        Posicion : posicionF
     });
    }
}

function validarnull(nombre,apellido,correo,posicionF,usuario,contraseña){
    var verificar=true;
    console.log("aqui");
    if(nombre==""){
        document.getElementById("Nombre").classList.add("alert-danger");
        verificar =false;        
    }
    if(apellido==""){
        document.getElementById("Apellido").classList.add("alert-danger");
        verificar =false;        
    }
    if(correo==""){
        document.getElementById("Correo").classList.add("alert-danger");
        verificar =false;        
    }
    if(usuario==""){
        document.getElementById("Usuario").classList.add("alert-danger");
        verificar =false;        
    }
    if(contraseña==""){
        document.getElementById("Contraseña").classList.add("alert-danger");
        verificar =false;        
    }

    return verificar;
}
