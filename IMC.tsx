function calcularIMC(peso: number, altura: number): number | string {
  if (altura <= 0 || peso <= 0) {
    return "Altura ou peso inválidos.";
  }

  const imc: number = peso / (altura * altura);
  return parseFloat(imc.toFixed(2)); // Retorna o IMC com 2 casas decimais
}

// Função para classificar o IMC
function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade grau 1";
  if (imc < 39.9) return "Obesidade grau 2";
  return "Obesidade grau 3";
}
