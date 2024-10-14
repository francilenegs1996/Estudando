//métodos de acesso à elementos nos arrays 

let profissoes = ['médico', 'designer', 'programador', 'psicológo', 'professor', 'programadores']

//find(): Retorna o primeiro elemento que satisfaz a função de teste.
//obs: retorna somente o primeiro caso de sucesso.
let found = profissoes.find(profissao => profissao.length > 18);
//console.log(found);

let found2 = profissoes.some(profissao => profissao === 'desiner');

console.log(found2);