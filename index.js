const btAdic = document.getElementById("btAdic");
const inputFood = document.getElementById("inputFood");
const inputGroup = document.getElementById("inputGroup");
const inputQtd = document.getElementById("inputQtd");
const btLimpar = document.getElementById("btLimpar");
let somatorio = 0;
let qtd = 0;

const handleBtAdicionarClick = () => {
  let num = parseInt(inputFood.value);
  if (isNaN(num)) {
    alert("Informe o nome do alimento");
    inputFood.focus();
    return;
  }

  ++qtd;
  somatorio += num;
  const media = somatorio / qtd;

  
  inputFood.value = food;
  inputGroup.value = group;
  inputQtd.value = qtd;
  inputNum.value = "";
  inputNum.focus();
};

const handleBtLimparClick = (evt) => {
  console.log("evt.target", evt.target);
  inputFood.value = 0;
  inputGroup.value = 0;
  inputQtd.value = 0;  
  inputNum.focus();
};

function calcularIMC(peso, altura) {
  if (altura <= 0 || peso <= 0) {
    return "Altura ou peso inválidos.";
  }

  const imc = peso / (altura * altura);
  return parseFloat(imc.toFixed(2));
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade grau 1";
  if (imc < 39.9) return "Obesidade grau 2";
  return "Obesidade grau 3";
}

const form = document.querySelector("#formIMC");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);

  const imc = calcularIMC(peso, altura);

  if (typeof imc === "string") {
    resultado.textContent = imc;
    return;
  }

  const classificacao = classificarIMC(imc);

  resultado.textContent = `IMC: ${imc} — ${classificacao}`;
});

// configuração de todos os eventos
btAdic.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
