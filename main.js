const metrificar = (e) => {
  // Dividir o poema colocado em diversas linhas
  const poema = document.getElementById("poema").value;
  const linhas = poema.split("\n");

  // Contagem dos versos,estrofes e silabas
  // Começamos estrofes em 1 para corrigir a contagem da primeira estrofe
  let versos = 0;
  let estrofes = 1;
  let silabas = 0;

  let ultimaLinhaEstrofe = false;
  for (const linha in linhas) {
    // Isso daqui deve ser uma nova estrofe
    if (linhas[linha] === "") {
      // Apenas contamos essa estrofe se a última linha não estava vazia
      if (!ultimaLinhaEstrofe) {
        ultimaLinhaEstrofe = true;
      }
    } else {
      // Novo verso
      versos++;

      // Cada verso geralmente tem aproximadamente 11 silabas tônicas
      silabas += 11;

      // Caso a última linha estivesse vazia, contamos uma estrofe
      if (ultimaLinhaEstrofe) {
        estrofes++;
        ultimaLinhaEstrofe = false;
      }
    }
  }

  const estrofesOutput = document.getElementById("estrofes");
  const versosOutput = document.getElementById("versos");
  const silabasOutput = document.getElementById("silabas");

  estrofesOutput.textContent = `Estrofes: ${estrofes}`;
  versosOutput.textContent = `Versos: ${versos}`;
  silabasOutput.textContent = `Silabas tônicas: ${silabas}`;
};
