import './styles/main.scss';

// centrarlo
Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif"
});

//crear y añadir elementos
const timerDiv = document.createElement("div");
timerDiv.id = "timer";
timerDiv.textContent = "00:00:00";
timerDiv.style.fontSize = "2.5em";

const btnDiv = document.createElement('div')
btnDiv.style.marginTop = "20px"

const startBtn = document.createElement("button");
startBtn.id = "start";
startBtn.textContent = "Iniciar";
startBtn.style.margin = "12px";
startBtn.style.padding = "12px 20px";

const pauseBtn = document.createElement("button");
pauseBtn.id = "pause";
pauseBtn.textContent = "Pausar";
pauseBtn.style.margin = "12px";
pauseBtn.style.padding = "12px 20px";

const resetBtn = document.createElement("button");
resetBtn.id = "reset";
resetBtn.textContent = "Reiniciar";
resetBtn.style.margin = "12px";
resetBtn.style.padding = "12px 20px";

document.body.appendChild(timerDiv);
btnDiv.appendChild(startBtn);
btnDiv.appendChild(pauseBtn);
btnDiv.appendChild(resetBtn);
document.body.appendChild(btnDiv);

// temporizador
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let enMarcha = false;

function actualizarTimer() {
  const s = String(segundos).padStart(2, '0');
  const m = String(minutos).padStart(2, '0');
  const h = String(horas).padStart(2, '0');
  timerDiv.textContent = `${h}:${m}:${s}`;
}

function tick() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  actualizarTimer();
}

//eventos

startBtn.addEventListener("click", function() {
  if (!enMarcha) {
    intervalo = setInterval(tick, 1000);
    enMarcha = true;
  }
});

pauseBtn.addEventListener("click", function() {
  if (enMarcha) {
    clearInterval(intervalo);
    enMarcha = false;
  }
});

resetBtn.addEventListener("click", function() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarTimer();
  enMarcha = false;
});

// funcion
actualizarTimer();