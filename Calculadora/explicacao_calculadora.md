
## Conceitos Importantes

### 1. **Variáveis**
   Variáveis são usadas para armazenar dados que podem ser reutilizados ou modificados durante a execução do código. No nosso código, utilizamos variáveis globais para armazenar números e operadores:
   - `numero1`: Armazena o primeiro número digitado.
   - `numero2`: Armazena o segundo número digitado.
   - `operador`: Armazena o operador matemático (+, -, *, /) escolhido pelo usuário.
   - `resetDisplay`: Serve para controlar quando o display da calculadora deve ser reiniciado (ex.: ao inserir o segundo número).

### 2. **Funções**
   Funções são blocos de código que realizam uma tarefa específica. As funções nos ajudam a organizar e reutilizar código. No nosso caso, temos funções para operações matemáticas e para manipular o display da calculadora:
   - `soma`, `subtrair`, `multiplicar`, `dividir`: Executam as operações básicas da calculadora.
   - `insert`: Insere os números no display.
   - `clean`: Limpa o display e reinicia a calculadora.
   - `escolherOperador`: Seleciona o operador de acordo com a escolha do usuário.
   - `calcular`: Realiza o cálculo final.

### 3. **Eventos `onclick`**
   O atributo `onclick` é usado para executar uma função quando o usuário clica em um botão. Cada botão da calculadora está associado a uma função que é chamada quando o botão é pressionado.

---

## Estrutura do Código

Vamos agora detalhar o que cada parte do código faz.

### 1. **Declaração de Variáveis Globais**

No início do código, são declaradas as variáveis que serão usadas em todo o programa:

```javascript
let numero1 = "";
let operador = "";
let numero2 = "";
let resetDisplay = false;

numero1 e numero2 armazenam os números que o usuário digita.
operador armazena o operador escolhido pelo usuário.
resetDisplay é um controle que indica quando o display deve ser resetado (ou seja, quando o segundo número deve ser inserido).


IF com Return quebra o fluxo.
As validações são criadas sempre antes, e devem existir o que queremos.

OBS:exemplo pra mim mesma kkk
if ( display.lenght >= 16) {
   alerta ('Minha mensagem')

  Aqui eu posso chamar o que eu quiser, quer dizer, depende né, vou testar depois

   return:


}