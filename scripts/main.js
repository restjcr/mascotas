let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://picsum.photos/id/237/400/300') {
      miImage.setAttribute('src','https://picsum.photos/id/1025/400/300');
    } else {
      miImage.setAttribute('src', 'https://picsum.photos/id/237/400/300');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){

    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Welcome, '+miNombre+'.';
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Welcome!, ' + nombreAlmacenado+'.';
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}
