# Em HTML, uma <table> é um elemento utilizado para exibir dados em formato de tabela, organizando as informações em linhas e colunas. Cada tabela é composta por diferentes elementos:

<table>: Elemento principal que define a tabela.
<tr> (table row): Define uma linha na tabela.
<th> (table header): Define uma célula de cabeçalho, normalmente exibida em negrito.
<td> (table data): Define uma célula de dados dentro de uma linha.


# Insert(num):

Essa função adiciona um número (ou outro valor, como operadores) ao conteúdo atual do elemento com o id resultado.
Ele basicamente concatena o valor atual com o novo valor fornecido.

# Clean():

Limpa o conteúdo do elemento com o id resultado, ou seja, redefine o display da calculadora.

# Back():

Remove o último caractere do display (uma função de "apagar" o último número ou operador). Isso é feito com o método substring(), que retorna uma parte da string original, excluindo o último caractere.

# Calcular():

Avalia o que está no display (dentro do elemento com id resultado) e tenta executar a expressão matemática usando eval(). Se houver uma expressão válida, ele a calcula, caso contrário, mostra "Nada...".

