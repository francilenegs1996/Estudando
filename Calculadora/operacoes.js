//Funções das operações básicas

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}


function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;

    if (numero === "0") {
        document.getElementById('resultado').innerHTML = num;
    } else {
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function clean()
        {
            document.getElementById('resultado').innerHTML = "0";
        }