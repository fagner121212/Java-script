
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }


function gerarNumero (numero) {
    numero = console.log(Math.floor(Math.random() * 10));
}

function gerarTexto (texto) {
    console.log(texto);
}

function trocaCor () {

    console.log(getRandomColor());

    // let corpo = document.getElementsByClassName('corpoPrincipal'); 

    let corpo1 = document.getElementById('corpoPrincipal');

    corpo1.style.backgroundColor = getRandomColor();

    // console.log(corpo);
    console.log(corpo1);
}

