
function registrar(){

    var nombre = document.getElementById("Nombre").value;
    var apellido= document.getElementById("Apellido").value;
    var correo= document.getElementById("Correo").value;
    var posicionF= document.querySelector('input[name="PosicionF"]:checked').value;
    var usuario= document.getElementById("Usuario").value;
    var contraseña= document.getElementById("Contraseña").value;
    var verificar = validarnull(nombre,apellido,correo,posicionF,usuario,contraseña);
    var buscaruser = false;
    if(verificar == true){
       
        buscaruser = buscarUsuario(usuario);
        
     
        if(buscaruser == false){
            var setRegister = firebase.database().ref('Usuarios');
            setRegister.child(usuario).set({
            Apellido : apellido,
            Contraseña : contraseña,
            Correo : correo,
            Nombre : nombre,
            Posicion : posicionF
            });
        }
        if(buscaruser == true){
            document.getElementById("Usuario").classList.add("alert-danger");
            window.alert("Este usuario ya esta en uso");
        }
    }
}

function validarnull(nombre,apellido,correo,posicionF,usuario,contraseña){
    var verificar=true;
    
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

function buscarUsuario(usuario){
    
    var ref = firebase.database().ref('Usuarios');
    var retornar = false;
    ref.orderByValue().limitToLast(3).on("value",function(snapchot){
        snapchot.forEach(function(data){
            var isEqual = JSON.stringify(data.key) === JSON.stringify(usuario);
        if(isEqual == true){
          
        retornar = true;  
        return retornar;
        }
        });
    });
    
    return retornar; 
}
