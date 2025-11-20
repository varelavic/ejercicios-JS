import './styles/main.scss';

const button = document.createElement('button');
button.textContent = 'cambiar de color';

//añadir el boton a la página
document.body.appendChild(button);

//funcion para cambiar el color aleatorio
function colorAleatorio(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

//evento
button.addEventListener('click', () =>{
    document.body.style.backgroundColor = colorAleatorio();
});

//Centrar el boton
Object.assign(button.style, {
    padding: "12px 20px",
    fontSize: "18px",
    cursor: "pointer"
})

Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0"
})