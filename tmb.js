function calcularTMB(sexo, peso, altura, idade) {
  if (peso <= 0 || altura <= 0 || idade <= 0) {
    return "Dados inválidos";
  }

  let tmb;

  if (sexo.toLowerCase() === "masculino") {
    // Homens
    tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
  } else if (sexo.toLowerCase() === "feminino") {
    // Mulheres
    tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
  } else {
    return "Sexo inválido (use 'masculino' ou 'feminino')";
  }

  return tmb.toFixed(2); // Calorias por dia
}
