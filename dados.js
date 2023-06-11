var dados;
var dado1;
var dado2;

function carregarDados() {
  // Faz a requisição AJAX para buscar os dados do JSON
  var request = new XMLHttpRequest();
  request.open("GET", "dados.json");
  request.onload = function () {
    if (request.status == 200) {
      dados = JSON.parse(request.responseText);
      dado1 = dados.dado1;
      dado2 = dados.dado2;
    }
  }
  request.send();
}

function sortear() {
  // Gera uma ação randômica
  const num1 = Math.floor(Math.random() * dado1.length);
  const rolagem1 = dado1[num1];

  // Gera um local randômico
  const num2 = Math.floor(Math.random() * dado2.length);
  const rolagem2 = dado2[num2];

  // Exibe o resultado ao usuário
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
     <p>
     <mark style="border-radius: 5px; background-color: #c48ded;">${rolagem1.acao}
     </mark> em 
     <mark style="border-radius: 5px; background-color: #c48ded;">${rolagem2.onde}
     </mark>.
     </p>
   `;
}

carregarDados();
