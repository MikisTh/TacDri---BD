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

  
  inputSoma.value = somatorio;
  inputMedia.value = media;
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

// configuração de todos os eventos
btAdic.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
