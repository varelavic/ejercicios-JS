import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
});

// agregar elementos al dom
const contenedor = document.createElement('div');
contenedor.style.maxWidth = '400px';
contenedor.style.margin = '10px 0';
document.body.appendChild(contenedor);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Escribe una tarea...';
input.style.marginRight = '5px';
contenedor.appendChild(input);


const btnAdd = document.createElement('button');
btnAdd.textContent = 'Añadir';
contenedor.appendChild(btnAdd);


const lista = document.createElement('ul');
lista.style.marginTop = '15px';
document.body.appendChild(lista);


const btnClear = document.createElement('button');
btnClear.textContent = 'Eliminar tareas completadas';
btnClear.style.marginTop = '10px';
document.body.appendChild(btnClear);


// funcion guardar tareas
function guardarTareas() {
const tareas = [];
lista.querySelectorAll('li').forEach(li => {
const checkbox = li.querySelector('input[type="checkbox"]');
tareas.push({ texto: li.dataset.texto, completada: checkbox.checked });
});
localStorage.setItem('tareas', JSON.stringify(tareas));
}


// funcion cargar tareas
function cargarTareas() {
const guardadas = JSON.parse(localStorage.getItem('tareas')) || [];
guardadas.forEach(t => agregarTarea(t.texto, t.completada));
}
// funcion para agregar tareas
function agregarTarea(texto, completada = false) {
if (!texto.trim()) return;


const li = document.createElement('li');
li.dataset.texto = texto;


const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = completada;
checkbox.addEventListener('change', guardarTareas);


const span = document.createElement('span');
span.textContent = ' ' + texto;


li.appendChild(checkbox);
li.appendChild(span);
lista.appendChild(li);


guardarTareas();
}


// evento agregar tarea
btnAdd.addEventListener('click', () => {
agregarTarea(input.value);
input.value = '';
});


// Añadir tarea usando Enter
document.addEventListener('keydown', e => {
if (e.key === 'Enter') {
agregarTarea(input.value);
input.value = '';
}
});


// evento borrar tareas completadas
btnClear.addEventListener('click', () => {
lista.querySelectorAll('li').forEach(li => {
if (li.querySelector('input').checked) li.remove();
});
guardarTareas();
});


// cargar tareas al iniciar
cargarTareas();