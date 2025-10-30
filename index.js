
// configuração de todos os eventos
btAdic.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;

// ===== Saturação de Transferrina =====
document.getElementById("btnTransferrina").addEventListener("click", () => {
  const ferro = parseFloat(document.getElementById("ferroSerico").value);
  const TIBC = parseFloat(document.getElementById("TIBC").value);

  if (!ferro || !TIBC) {
    document.getElementById("resTransferrina").textContent = "Preencha todos os campos.";
    return;
  }

  const satTransferrina = (ferro / TIBC) * 100;
  let msg = `Índice de Saturação: ${satTransferrina.toFixed(2)}%`;

  if (ferro >= 60 && ferro <= 170) {
    msg += " | Ferro sérico dentro do valor de referência.";
  } else {
    msg += " | Ferro sérico fora do valor de referência.";
  }

  document.getElementById("resTransferrina").textContent = msg;
});

// ===== IMC =====
document.getElementById("btnIMC").addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("pesoIMC").value);
  const altura = parseFloat(document.getElementById("alturaIMC").value);

  if (!peso || !altura) {
    document.getElementById("resIMC").textContent = "Preencha todos os campos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  document.getElementById("resIMC").textContent = `IMC: ${imc.toFixed(2)} (${classificacao})`;
});

// ===== MET =====
document.getElementById("btnMET").addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("pesoMET").value);
  const tempo = parseFloat(document.getElementById("tempoAtv").value);
  const MET = parseFloat(document.getElementById("valorMET").value);

  if (!peso || !tempo || !MET) {
    document.getElementById("resMET").textContent = "Preencha todos os campos.";
    return;
  }

  const gasto = (MET * 3.5 * peso / 200) * tempo;
  document.getElementById("resMET").textContent = `Gasto Energético: ${gasto.toFixed(2)} kcal`;
});

// ===== GET =====
document.getElementById("btnGET").addEventListener("click", () => {
  const GEB = parseFloat(document.getElementById("GEB").value);
  const FA = parseFloat(document.getElementById("FAtividade").value);
  const FE = parseFloat(document.getElementById("FEstresse").value);
  const FT = parseFloat(document.getElementById("FTermico").value);

  if (!GEB || !FA || !FE || !FT) {
    document.getElementById("resGET").textContent = "Preencha todos os campos.";
    return;
  }

  const GET = GEB * FA * FE * FT;
  document.getElementById("resGET").textContent = `GET: ${GET.toFixed(2)} kcal/dia`;
});

// ===== Balanço Nitrogenado =====
document.getElementById("btnBN").addEventListener("click", () => {
  const nitIng = parseFloat(document.getElementById("nitIng").value);
  const nitExc = parseFloat(document.getElementById("nitExc").value);

  if (!nitIng || !nitExc) {
    document.getElementById("resBN").textContent = "Preencha todos os campos.";
    return;
  }

  const balanco = nitIng - nitExc;
  document.getElementById("resBN").textContent = `Balanço Nitrogenado: ${balanco.toFixed(2)} g`;
});

// ===== Cálculo de Nutrientes (TACO simulado) =====

// Exemplo simplificado de banco de dados TACO
const tacoDB = {
  "Leite integral": { energia: 61, proteina: 3.2, carbo: 4.8, gordura: 3.3 },
  "Arroz parboilizado": { energia: 130, proteina: 2.7, carbo: 28, gordura: 0.3 },
  "Feijão preto": { energia: 127, proteina: 8.7, carbo: 23.7, gordura: 0.5 },
  "Peito de frango": { energia: 165, proteina: 31, carbo: 0, gordura: 3.6 }
};

let consumo = [];

document.getElementById("btnAddConsumo").addEventListener("click", () => {
  const alimento = document.getElementById("nomeAlimento").value.trim();
  const quantidade = parseFloat(document.getElementById("quantidadeAlimento").value);

  if (!alimento || !quantidade) {
    alert("Preencha o alimento e a quantidade.");
    return;
  }

  if (!tacoDB[alimento]) {
    alert("Alimento não encontrado na base TACO.");
    return;
  }

  consumo.push({ alimento, quantidade });
  document.getElementById("resNutrientes").textContent = `Alimento adicionado: ${alimento} (${quantidade}g)`;
  document.getElementById("nomeAlimento").value = "";
  document.getElementById("quantidadeAlimento").value = "";
});

document.getElementById("btnCalcularNutrientes").addEventListener("click", () => {
  if (consumo.length === 0) {
    document.getElementById("resNutrientes").textContent = "Nenhum alimento adicionado.";
    return;
  }

  let total = { energia: 0, proteina: 0, carbo: 0, gordura: 0 };

  consumo.forEach(item => {
    const dados = tacoDB[item.alimento];
    total.energia += (dados.energia * item.quantidade) / 100;
    total.proteina += (dados.proteina * item.quantidade) / 100;
    total.carbo += (dados.carbo * item.quantidade) / 100;
    total.gordura += (dados.gordura * item.quantidade) / 100;
  });

  document.getElementById("resNutrientes").textContent =
    `Totais: Energia ${total.energia.toFixed(2)} kcal | Proteína ${total.proteina.toFixed(2)} g | Carboidrato ${total.carbo.toFixed(2)} g | Gordura ${total.gordura.toFixed(2)} g`;

  consumo = []; // limpa consumo após cálculo
});

