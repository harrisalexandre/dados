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

var listaAudios = [];

$(document).ready(function () {
  //já que você quer fazer o carregamento antecipado de tudo, pode fazer isso quando 
  //a página for carregada. Pode ser ruim fazer isso se forem muitos
  //arquivos e muito grandes.

  $('.btnPlayAudio').each(function (e) {
    var url = $(this).attr('data-audiourl');
    var audioPlay = new Audio(url);
    audioPlay.preload = "auto";

    var audioData = {
      'url': $(this).attr('data-audiourl'),
      'audioPlayObj': audioPlay
    };

    listaAudios.push(audioData);
  });
});

$('.btnPlayAudio').click(function () {
  var url = $(this).attr('data-audiourl');
  for (var i = 0; i < listaAudios.length; i++) {
    if (listaAudios[i].url == url) {
      var audio = listaAudios[i].audioPlayObj;
      audio.currentTime = 0;
      audio.volume = 1;
      audio.play();
      break;
    }
  }
});

function stopAll() {
  for (var i = 0; i < listaAudios.length; i++) {
    listaAudios[i].audioPlayObj.pause();
  }
}

function sortear() {

  $('.audioplay').each(function (i) {
    var audioplay = new Audio('dados.mp3');
    audioplay.preload = "auto";
    $(this).click(function (e) {
      e.preventDefault();
      audioplay.currentTime = 0;
      audioplay.play();
      audioplay.volume = 1;
      $(this).data("audio-click");
    });
  });

  // Gera uma ação randômica
  const num1 = Math.floor(Math.random() * dado1.length);
  const rolagem1 = dado1[num1];

  // Verifica se o valor da primeira rolagem é igual a um valor específico
  if (rolagem1.acao === "chama_dado3") {
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