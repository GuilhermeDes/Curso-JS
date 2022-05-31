/*
window.alert('Isso é um alerta!')

window.confirm('Isso é um alerta com confirmação!')

window.prompt('Digite algo aqui')

var nome = 'Guilherme'
var idade = 21

var nome = window.prompt('Qual o seu nome?')
window.alert(`O seu nome é: ${nome}!`)
// ${Variavel} - Placeholder
// '+' Pode ser utilizado com conctenação ou adição nas operações matematicas.
window.alert('O seu nome é: ' + nome + '!')


//Utilizando somente o Number, onde ele identifica o tipo de numero.
var idade = Number(window.prompt('Qual a sua idade?'))
window.alert(`Voce tem ${idade} anos!`)

//Utilizando o Number.parseFloat ele so vai aceitar numeros floats.
var idade = Number.parseFloat(window.prompt('Qual a sua idade?'))
window.alert(`Voce tem ${idade} anos!`)

//Utilizando o Number.parseInt ele so vai aceitar numeros inteiros.
var idade = Number.parseInt(window.prompt('Qual a sua idade?'))
window.alert(`Voce tem ${idade} anos!`)

//Aqui fazemos uma operação matematica, onde pegamos duas variaveis e somamos elas.
var n1 = Number(window.prompt('Digite algum numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))
var s = n1 + n2
window.alert(`A soma dos dois numeros é: ${s}`)

//Caso eu queira contar quantos caracteres tem a minha string eu posso utiliza o length ${name.length}
window.alert(`A soma dos dois numeros é: ${s.length}`)

//Se precisar deixar alguma varialve caixas altas(upercase) eu utilizo o toUpperCase() ${name.toUpperCase()}
window.alert(`A soma dos dois numeros é: ${s.toUpperCase()}`)

//Se precisar deixar alguma varialve caixas baixas(lowercase) eu utilizo o toLowerCase() ${name.toLowerCase()}
window.alert(`A soma dos dois numeros é: ${s.toLowerCase()}`)

//muito utilizado para demonstrar dados o ducoment.write ou document.writeln lhe auxilia de forma dinamica.
var nome = window.prompt('Qual o seu nome?')
document.writeln(`O seu nome é: ${nome}!`)

// A diferenã dos dois é que com o write ele nao processa os espaçamento das letras enquanto o writeln sim.

//VAMOS APRENDER SOBRE OS OPERADORES
/*
//ARITMETICOS
ordem de precedência
()
**
* / %
+ -

//ATRIBUIÇÃO
var n = 3

n = n + 4      =>  n += 4
n = n - 5      =>  n -= 5
n = n * 4      =>  n *= 4
n = n / 2      =>  n /= 2
n = n ** 2     =>  n **= 2
n = n % 5      =>  n %= 5

//RELACIONAIS
!A reposta dos relacionais é em boleano, no caso so ira mostra false ou true!
Ex: 21 >= 20 : Sim pois 21 é maior do que 20.
> - Maior do que...
< - Menor do que...
>= - Maior ou igual a ...
<= - Menor ou igual a...
== - igual a...
!= - Diferente de...
=== - Tipo e valores iguais...

//LOGICOS

! - Negação - pode ser qualquer valor, menos o valor que foi mencionado
&& - Conjunção - precisa ter os respectivos valores informado
|| - Disjunção - so precisa de um valor informado

Ex01:
var n1 = 5
var n2 = 8
n1 <= n2 || N2 / 2 == 2
true || false  
R: true

Ex02:
var n1 = 5
var n2 = 8
n1 > n2 && N2 % 2 = 0
false && true 
R: false

//TERNARIO

?
:

TESTE ? TRUE : FALSE
EX: media >= 7 ? 'APROVADO' : 'REPROVADO'

var x = 8
var res = x % 2 == 0 ? 5 : 9

ORDEM DE PRECENDENCIA DOS OPERADORES
//ARITMETICOS
//RELACIONAIS
//LOGICOS
//TERNARIO
*/