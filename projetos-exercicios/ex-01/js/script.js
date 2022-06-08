
var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var imgrst = document.getElementById('resultado')
var imgresultado = document.getElementById('imgresultado')
var textoresultado = document.getElementById('textoresultado')
var situacao = document.getElementById('situacao')

function calcularimc() {

    var p = Number(peso.value)
    var a = Number(altura.value)

    //Aqui temos uma condição para verificar se os inputs estao nulos ou nao
    if (p == 0) {
        document.alert("Digite algum peso!")
    } else if (a == 0) {
        document.alert("Digite algum altura!")
    } else {
        var imc = p / ((a * a) / 10000);
    }

    //Aqui ele executa um laço de condição para verificar sobre o seu imc com as informações
    if (imc < 18.5) {
        imgresultado.innerHTML += `<img src="./img/img1.png" class = "imgr">`
        textoresultado.innerHTML += `O seu IMC é de: ${imc.toFixed(1)}`
        situacao.innerHTML += `Você esta abaixo do peso!`
    } else if (imc >= 18.6 && imc <= 24.9) {
        imgresultado.innerHTML += `<img src="./img/img2.png" class = "imgr">`
        textoresultado.innerHTML += `O seu IMC é de: ${imc.toFixed(1)}`
        situacao.innerHTML += `Você esta no peso ideal!`
    } else if (imc >= 25 && imc <= 29.9) {
        imgresultado.innerHTML += `<img src="./img/img3.png" class = "imgr">`
        textoresultado.innerHTML += `O seu IMC é de: ${imc.toFixed(1)}`
        situacao.innerHTML += `Você esta acima do peso!`
    } else if (imc > 30 && imc <= 34.9) {
        imgresultado.innerHTML += `<img src="./img/img4.png" class = "imgr">`
        textoresultado.innerHTML += `O seu IMC é de: ${imc.toFixed(1)}`
        situacao.innerHTML += `Você esta com sobrepeso!`
    } else {
        imgresultado.innerHTML += `<img src="./img/img5.png" class = "imgr">`
        textoresultado.innerHTML += `O seu IMC é de: ${imc.toFixed(1)}`
        situacao.innerHTML += `Você esta com obesidade!`
    }
}

//Reset
//p.value = '', a.value = ''
    //imgresultado = "", textoresultado = "", situacao = ""
    /*
    function reset(imgresultado, textoresultado, situacao) {
        imgresultado.innerHTML += ``
        textoresultado.innerHTML += ``
        situacao.innerHTML += ``
    }
        */
    
    
    
/*Para realizar os testes

/PESO/
1- 55
2- 65
3- 85
4- 100
5- 120

/ALTURA/
1- 180

*/