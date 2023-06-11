var dados;
var dado1;
var dado2;
var dado3;

function carregarDados() {
  // Faz a requisição AJAX para buscar os dados do JSON
  var request = new XMLHttpRequest();
  request.open("GET", "dados.json");
  request.onload = function () {
    if (request.status == 200) {
      dados = JSON.parse(request.responseText);
      dado1 = dados.dado1;
      dado2 = dados.dado2;
      dado3 = dados.dado3; // adiciona esta linha para carregar o terceiro dado
    }
  }
  request.send();
}

function terceiraRolagem() {
  // Gera uma terceira rolagem randômica
  const num3 = Math.floor(Math.random() * dado3.length);
  const rolagem3 = dado3[num3];

  // Exibe o resultado ao usuário
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
     <p>
     <mark style="background-color: #c48ded;">${rolagem3.acao}
     </mark>.
     </p>
   `;
}

function sortear() {
  // Gera uma ação randômica
  const num1 = Math.floor(Math.random() * dado1.length);
  const rolagem1 = dado1[num1];

  // Verifica se o valor da primeira rolagem é igual a um valor específico
  if (rolagem1.acao === "3") {
    // Chama uma terceira função de rolagem
    terceiraRolagem();
  } else {
    // Gera um local randômico
    const num2 = Math.floor(Math.random() * dado2.length);
    const rolagem2 = dado2[num2];

    // Exibe o resultado ao usuário
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
       <p>
       <mark style=" background-color: #c48ded;">${rolagem1.acao}
       </mark>
       <mark style=" background-color: #c48ded;">${rolagem2.onde}
       </mark>.
       </p>
     `;
  }
}

carregarDados();