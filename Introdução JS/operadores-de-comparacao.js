//Operadores de comparação

"a" === "b"; // A é igual igual a B
"a" !== "b"; // A é diferente de B
10 > 20; // 10 é maior que 20
10 < 20; // 10 é menor qie 20
10 >= 20; // 10 é maior ou igual a 20
10 <= 20; // 10 é menor ou igual a 20

//comando Prompt
//obs= O JS concatena strings, então é preciso dizer para ele que é do tipo number

let nota1 = Number(prompt("Digite sua primeira nota?"));
let nota2 = Number(prompt("Digite sua segunda nota"));

let resultado = nota1 + nota2 / 2;

if (resultado >= 6) {
  alert("Parabéns! Você foi aprovado.");
} else resultado < 5;
{
  alert("Você foi reprovado");
}
