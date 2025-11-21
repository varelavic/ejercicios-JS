import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});

// campo de entrada
const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Longitud de la contraseña';
input.style.margin = '5px';
document.body.appendChild(input);


// Crear botón
const boton = document.createElement('button');
boton.textContent = 'Generar contraseña';
boton.style.margin = '5px';
document.body.appendChild(boton);


// Zona de resultado
const resultado = document.createElement('div');
resultado.style.marginTop = '15px';
resultado.style.fontWeight = 'bold';
document.body.appendChild(resultado);

//funcion
function generarContrasena(longitud) {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>?,.';
let contrasena = '';
for (let i = 0; i < longitud; i++) {
const index = Math.floor(Math.random() * chars.length);
contrasena += chars[index];
}
return contrasena;
}

// evento
boton.addEventListener('click', () => {
const valor = input.value;


if (valor === '' || parseInt(valor) < 4) {
resultado.textContent = 'Error: La longitud debe ser mayor o igual a 4.';
return;
}


const longitud = parseInt(valor);
const pass = generarContrasena(longitud);
resultado.textContent = 'Contraseña generada: ' + pass;
});