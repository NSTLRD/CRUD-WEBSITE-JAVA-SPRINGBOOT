// Call the dataTables jQuery plugin
$(document).ready(function() {
    //wait for update
});



async function registrarUsuarios(){
    let datos = {};
    datos.Nombre = document.getElementById('username').value;
    datos.Apellido = document.getElementById('password').value;
    datos.Email = document.getElementById('email').value;


    let RepetirPassword = document.getElementById('txtRepetirPassword').value;
    //!= signo de diferencia ==signo de igual//
    if(RepetirPassword != datos.Password){
        alert('La contraseña que escribiste es diferente')
        //ponemos un return para cortar la funcion y que no//
        //proceda con el request ya que los datos no son correctos//
        return;
    }

    const request = await fetch('/form/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("La cuenta fue creada con exito");
    localStorage.nombre = datos.nombre;
    localStorage.apellido = datos.apellido;
    localStorage.email = datos.email;


}
