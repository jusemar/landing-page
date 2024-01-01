/* adicione um overlay transparente para capturar eventos de clique com botão direito do mouse
document.body.insertAdjacentHTML('beforeend', '<div id="overlay"></div>');

// adicione um ouvinte de eventos de clique com botão direito do mouse no overlay
document.getElementById("overlay").addEventListener("contextmenu", function(event) {
  event.preventDefault();
  if (event.target.tagName == "video" || event.target.tagName == "a") {
    return true;
  } else {
    return false;
  }
});

// selecione todos os elementos de vídeo e <a> na página
var videos = document.getElementsByTagName("video");
var links = document.getElementsByTagName("a");

// adicione um ouvinte de eventos de clique a cada elemento
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("click", function(event) {
    event.stopPropagation(); // interrompe a propagação do evento para o overlay
  });
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    event.stopPropagation(); // interrompe a propagação do evento para o overlay
  });
}
*/




// Seleciona o link que dispara o alerta
var link = document.querySelector('a#desenvolvido');

// Adiciona um evento de clique ao link
link.addEventListener('click', function() {
  // Exibe um alerta com a mensagem
  alert('Bem vindo! Meu whatsapp: 31 99430-4473');
});


const countdownDate = new Date("05/26/2023 00:00:00");

// Atualiza a contagem regressiva a cada segundo
const diaElement = document.getElementById("dia");
const horaElement = document.getElementById("hora");
const minutoElement = document.getElementById("minuto");
const segundoElement = document.getElementById("segundo");

const countdownInterval = setInterval(() => {
  const now = new Date();
  const distance = countdownDate - now;

  // Verifica se a contagem regressiva chegou ao fim
  if (distance <= 0) {
    clearInterval(countdownInterval);
    diaElement.innerHTML = '0';
    horaElement.innerHTML = '0';
    minutoElement.innerHTML = '0';
    segundoElement.innerHTML = '0';
    return;
  }

  // Calcula o tempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Atualiza os elementos HTML com os valores da contagem regressiva
  diaElement.innerHTML = days.toString();
  horaElement.innerHTML = hours.toString();
  minutoElement.innerHTML = minutes.toString();
  segundoElement.innerHTML = seconds.toString();
}, 1000);