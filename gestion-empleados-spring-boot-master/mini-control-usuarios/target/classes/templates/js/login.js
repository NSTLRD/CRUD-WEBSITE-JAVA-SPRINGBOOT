$(document).ready(function() {
    // on ready
});


async function iniciarSesion() {
    let datos = {};
    datos.email = document.getElementById('email').value;


    const request = await fetch('/listar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    localStorage.datos = datos.email;

}