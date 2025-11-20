import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});
// inputs
const divInputs = document.createElement('div');
const divButtons = document.createElement('div');

const input1 = document.createElement('input');
input1.type = 'number';
input1.placeholder = 'Número 1';


const input2 = document.createElement('input');
input2.type = 'number';
input2.placeholder = 'Número 2';


const btnSum = document.createElement('button');
btnSum.textContent = 'Sumar';


const btnRes = document.createElement('button');
btnRes.textContent = 'Restar';


const btnMul = document.createElement('button');
btnMul.textContent = 'Multiplicar';


const btnDiv = document.createElement('button');
btnDiv.textContent = 'Dividir';


const resultado = document.createElement('div');
resultado.style.marginTop = '15px';
resultado.style.fontWeight = 'bold';


// Agregar elementos al body
divInputs.appendChild(input1);
divInputs.appendChild(input2);
document.body.appendChild(divInputs);
document.body.appendChild(document.createElement('br'));

divButtons.appendChild(btnSum)
divButtons.appendChild(btnRes)
divButtons.appendChild(btnMul)
divButtons.appendChild(btnDiv)
document.body.appendChild(divButtons)

document.body.appendChild(resultado);


function calcular(tipo) {
const n1 = input1.value;
const n2 = input2.value;


if (n1 === '' || n2 === '') {
resultado.textContent = 'Error: Ambos campos deben tener un número.';
return;
}


const a = parseFloat(n1);
const b = parseFloat(n2);
let r;


switch (tipo) {
case 'sumar':
r = a + b;
break;
case 'restar':
r = a - b;
break;
case 'multiplicar':
r = a * b;
break;
case 'dividir':
if (b === 0) {
resultado.textContent = 'Error: No se puede dividir entre cero.';
return;
}
r = a / b;
break;
}


resultado.textContent = 'Resultado: ' + r;
}


btnSum.addEventListener('click', () => calcular('sumar'));
btnRes.addEventListener('click', () => calcular('restar'));
btnMul.addEventListener('click', () => calcular('multiplicar'));
btnDiv.addEventListener('click', () => calcular('dividir'));