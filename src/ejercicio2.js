import './styles/main.scss';

const botonContar = document.createElement("button");
botonContar.textContent = "Contardor clics";
Object.assign(botonContar.style, {
    padding: "12px 20px",
    fontSize: "18px",
    cursor: "pointer"
});
document.body.appendChild(botonContar);

// Texto inicial
const texto = document.createElement("p");
texto.textContent = "Clics: 0";
texto.style.fontSize = "20px";
document.body.appendChild(texto);

//Centrar el boton
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0"
})

let contador = 0;

//evento
botonContar.addEventListener("click", () => {
    contador++;
    texto.textContent = `Clics: ${contador}`;
});
