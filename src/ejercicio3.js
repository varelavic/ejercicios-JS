import './styles/main.scss';

// centrarlo en la página
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});

// campo de texto
const input = document.createElement("input");
Object.assign(input.style, {
    padding: "8px",
    fontSize: "16px",
    width: "200px",
    marginBottom: "10px"
});
document.body.appendChild(input);

// botón de agregar
const botonAgregar = document.createElement("button");
botonAgregar.textContent = "Agregar";
Object.assign(botonAgregar.style, {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer"
});
document.body.appendChild(botonAgregar);

// Lista
const lista = document.createElement("ul");
Object.assign(lista.style, {
    marginTop: "20px",
    padding: "0",
    width: "250px",
    listStyle: "none"
});
document.body.appendChild(lista);


// función del ejercicio
function agregarElemento() {
    const texto = input.value.trim();
    if (texto === "") return;

    const item = document.createElement("li");
    Object.assign(item.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 0"
    });

    const span = document.createElement("span");
    span.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    Object.assign(btnEliminar.style, {
        padding: "4px 8px",
        fontSize: "14px",
        cursor: "pointer"
    });

    btnEliminar.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(span);
    item.appendChild(btnEliminar);
    lista.appendChild(item);

    // Esto limpia del campo de texto
    input.value = "";
}


// evento agregar
botonAgregar.addEventListener("click", agregarElemento);

// para poder agregarlo también con el enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarElemento();
    }
});