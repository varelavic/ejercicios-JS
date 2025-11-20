import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});

// lista predefinida
const listaCompras = ["Leche", "Pan", "Huevos", "Arroz", "Agua", "Fruta", "Café", "Pasta"];

// campo de texto
const input = document.createElement("input");
Object.assign(input.style, {
    padding: "8px",
    fontSize: "16px",
    width: "200px",
    marginBottom: "10px"
});
document.body.appendChild(input);

// lista visual
const lista = document.createElement("ul");
Object.assign(lista.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 0",
    gap: "20px",
    marginTop: "20px",
    listStyle: "none"
});
document.body.appendChild(lista);

// función
function actualizarLista(filtro = "") {
    lista.innerHTML = ""; // limpiar lista

    listaCompras
        .filter(item => item.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.style.padding = "6px 0";
            lista.appendChild(li);
        });
}

// Mostrar lista completa al inicio
actualizarLista();

// evento tiempo real
input.addEventListener("input", () => {
    actualizarLista(input.value);
});