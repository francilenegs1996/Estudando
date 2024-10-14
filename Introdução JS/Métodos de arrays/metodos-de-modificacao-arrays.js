//manipulando arrays 

//1.Adicionar ou remover elementos:

let AreasDoUX = ['mobile', 'desktop', 'product digital'];

//posição. vc pode escolher a posição
AreasDoUX[1]

//Adiciona um ou mais elementos ao final do array.
AreasDoUX.push('web');

//Remove o último elemento do array e o retorna.
AreasDoUX.pop('mobile');

//console.log(AreasDoUX[3])


//usando o lenght (é uma propriedade usada para retornar o tamanho ou o numero de itens)
//console.log(AreasDoUX.length);

//unshift(element) Adiciona um ou mais elementos no início do array.
AreasDoUX.unshift('web');

//shift(): Remove o primeiro elemento do array e o retorna.
AreasDoUX.shift('web');

AreasDoUX.shift('mobile');

//splice() Adiciona ou remove elementos de qualquer posição do array.
// exemplo : AreasDoUX.splice(1,2);
//console.log(AreasDoUX)

//sort(): Ordena os elementos.
AreasDoUX.sort();

//reverse(): Inverte a ordem dos elementos.
AreasDoUX.reverse;




