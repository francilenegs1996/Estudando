

function insert(num) {
  let display = document.getElementById("resultado").innerHTML;

  // Se o display já tiver "0", substituímos pelo número digitado
  if (display === "0") {
    document.getElementById("resultado").innerHTML = num;
    currentNumber = num; // Atualiza o número atual
  } else {
    document.getElementById("resultado").innerHTML += num;
    currentNumber += num; // Concatenamos o novo número
  }
}

function clean() {
  document.getElementById("resultado").innerHTML = "0";
}


