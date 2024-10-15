//Estruturas de repetição FOR

// #For (iniciador; condição-saída; expressão-final;) {
//}

//Iniciador: geralmente uma variavel que recebe um número que vai contar a quantidade
//de vezes que a repetição for executada. (Normalmente tbm é chamada de varivael de contagem)

//Condição-saída: Quando a repetição deve ser encerrada. Pode ser usado um operador de compaação.

//Expressão final: Para q o iniciador faça mais contagem ou menos contagem.Tbm chamado de incremento,
//fou usado na variavel repetição para indicar que será adicioado mais notas caso tenha mais notas no caixa.

//Desafio
//Valor do caixa de um armazém no final do expediente

let NotasDoCaixa = [
  2, 5, 8, 12, 20, 35, 50, 75, 100, 2, 5, 8, 12, 20, 35, 50, 75, 100, 2, 5, 8,
  12, 20, 35, 50, 75, 100,
];

let total = 0;

//Soma das notas do caixa

// Este loop percorre o array 'NotasDoCaixa' e soma seus valores ao total.
// 'repetições' começa em 0 e continua até que alcance o tamanho do array 'NotasDoCaixa'.
for (let repetições = 0; repetições < NotasDoCaixa.length; repetições++) {
    total += NotasDoCaixa[repetições]; // Adiciona o valor atual de 'NotasDoCaixa' ao total.
}

console.log(`O total do seu dinheiro é: ${total}`);
