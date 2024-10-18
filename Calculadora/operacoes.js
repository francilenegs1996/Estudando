// Variáveis para armazenar os valores e o operador
let numero1 = "";
let operador = "";
let numero2 = "";
let resetDisplay = false; // Variável para saber quando resetar o display para o segundo número

// Funções das operações básicas
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

// Função para inserir números no display
function insert(num) {
  
  var display = document.getElementById('resultado').innerHTML;

  if (display.length >= 16) {
    alert('Ops!  Eu sou uma calculadora básica, só aguento 16 caracteres , pequeno gafanhoto :)');
    return; // Interrompe a execução da função para impedir a adição de mais caracteres
  }

  // Se o display está com "0" ou precisa ser resetado (após selecionar um operador)
  if (display === "0" || resetDisplay) {
    document.getElementById('resultado').innerHTML = num;
    resetDisplay = false; // Agora podemos continuar a inserir normalmente
  } else {
    document.getElementById('resultado').innerHTML = display + num;
  }

  // Se ainda não escolheu o operador, insere no número1, senão no número2
  if (operador === "") {
    numero1 += num;
  } else {
    numero2 += num;
  }
}

// Função para limpar o display
function clean() {
  document.getElementById('resultado').innerHTML = "0";
  numero1 = "";
  numero2 = "";
  operador = "";
  resetDisplay = false;
}

// Função para escolher o operador
function escolherOperador(op) {

  if (numero2){
    calcular();
  }
  // Somente escolhe o operador se o número1 já foi inserido
  if (numero1 !== "") {
    operador = op;
    resetDisplay = true; // O próximo número a ser inserido será o segundo número
  }
}

// Função para calcular o resultado
function calcular() {

  
  
  if (!numero1 || !numero2) {
    return;
  }
  let resultado = 0;
  
  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (operador === "+") {
    resultado = soma(num1, num2);
  } else if (operador === "-") {
    resultado = subtrair(num1, num2);
  } else if (operador === "*") {
    resultado = multiplicar(num1, num2);
  } else if (operador === "/") {
    if (num2 === 0) {
      document.getElementById('resultado').innerHTML = "Erro";
      return;
    }
    resultado = dividir(num1, num2);
  }
  
  if (resultado.toString().length  >= 16) {
    alert( ' Ei, sou uma calcualdora básica e seu resultado ultrapassou meu limite de 16 caracteres :)')
    
    document.getElementById('resultado').innerHTML= "Erro";  
    
    return;
  }

  document.getElementById('resultado').innerHTML = resultado;
  numero1 = resultado.toString(); // Permite que o resultado se torne o próximo número1
  numero2 = "";
  operador = "";
  resetDisplay = true; // Depois  do cálculo, o próximo número deve resetar o display
}
