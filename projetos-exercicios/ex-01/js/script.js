
var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var imgrst = document.getElementById('resultado')

function calcularimc() {

    var p = Number(peso.value)
    var a = Number(altura.value)

    var imc = p / ((a * a) / 10000);

    if (imc < 18.5) {
        imgrst.innerHTML = `<img src="./img/img1.png" class = "imgr"> O seu imc é de ${imc}`
    } else if (imc >= 18.6 && imc <= 24.9) {
        imgrst.innerHTML = `<img src="./img/img2.png" class = "imgr"> O seu imc é de ${imc}`
    } else if (imc >= 25 && imc <= 29.9) {
        imgrst.innerHTML = `<img src="./img/img3.png" class = "imgr"> O seu imc é de ${imc}`
    } else if (imc > 30 && imc <= 34.9) {
        imgrst.innerHTML = `<img src="./img/img4.png" class = "imgr"> O seu imc é de ${imc}`
    } else {
        imgrst.innerHTML = `<img src="./img/img5.png" class = "imgr"> O seu imc é de ${imc}`
    }
}

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