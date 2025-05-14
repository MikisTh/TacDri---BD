const btAdic = document.getElementById("btAdic");
const inputAltura = document.getElementById("inputAltura");
const inputPeso = document.getElementById("inputPeso");
const inputIMC = document.getElementById("inputIMC");
const btLimpar = document.getElementById("btLimpar");
let IMC = 0;
let altura = 0;
let peso = 0;

const handleBtAdicionarClick = () => {
  let altura = parseInt(inputAltura.value);
  if (isNaN(Altura)) {
    alert("Informe sua altura");
    inputAltura.focus();
    return;
  }
  const handleBtAdicionarClick = () => {
  let peso = parseInt(inputPeso.value);
  if (isNaN(peso)) {
    alert("Informe seu peso");
    inputPeso.focus();
    return;
  }
 
  const IMC = peso / altura * 2;

  
  inputAltura.value = altura;
  inputPeso.value = peso;
  inputAltura.value = "";
  inputPeso.value = "";
  inputAltura.focus();
  inputPeso.focus();
};

const handleBtLimparClick = (evt) => {
  console.log("evt.target", evt.target);
  inputAltura.value = 0;
  inputPeso.value = 0;
  inputIMC.value = 0;  
  inputIMC.focus();
};

// configuração de todos os eventos
btAdic.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;

  // Classificação IMC 

  function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade grau 1";
  if (imc < 39.9) return "Obesidade grau 2";
  return "Obesidade grau 3";
}
