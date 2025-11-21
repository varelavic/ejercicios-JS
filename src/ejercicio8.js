import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});

// Crear textarea
const textarea = document.createElement('textarea');
textarea.placeholder = 'Escribe y se hará un recuento de palabras';
textarea.rows = 6;
textarea.cols = 50;
textarea.style.margin = '5px';
document.body.appendChild(textarea);


// Contenedores de resultados
const resultadoPalabras = document.createElement('div');
resultadoPalabras.style.marginTop = '10px';
resultadoPalabras.style.fontWeight = 'bold';


document.body.appendChild(resultadoPalabras);


const resultadoCaracteres = document.createElement('div');
resultadoCaracteres.style.fontWeight = 'bold';
document.body.appendChild(resultadoCaracteres);


function actualizarContadores() {
const texto = textarea.value;


// Contador de palabras
const palabras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;


// Contador de caracteres
const caracteres = texto.replace(/\s+/g, '').length;


resultadoPalabras.textContent = `Palabras: ${palabras}`;
resultadoCaracteres.textContent = `Caracteres: ${caracteres}`;
}


textarea.addEventListener('input', actualizarContadores);


// Inicializar contadores
actualizarContadores();