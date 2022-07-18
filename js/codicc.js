// receber a informação do usuário 
// separar a info em char com charcodeAt e algum for com i 
// aumentar esses números com o passo desejado 
// voltar o num para o char 
// retornar a info codificada pro usuário 
var arrayTexto = [],
    arrayCrypto = []

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()

})

var input = document.getElementById("textoEntrada")
var inputSaida = document.getElementById("textoSaida")


var codificar = document.querySelector("#btnCodificar")
var decodificar = document.querySelector("#btnDecodificar")



function converteEmASCII() {


    var textoEntrada = input.value

    for (var k = 0; k < textoEntrada.length; k++) {
        if (textoEntrada.charCodeAt(k) == 32) {
            arrayTexto.push(textoEntrada.charCodeAt(k));
        } else if (textoEntrada.charAt(k).toUpperCase() !== textoEntrada.charAt(k).toLowerCase()) {
            arrayTexto.push(textoEntrada.charCodeAt(k));
        } else {
            arrayTexto.push(textoEntrada.charCodeAt(k));
        }

    }
}


function converteEmCripto() {

    for (var i = 0; i < arrayTexto.length; i++) {
        var passo = parseInt(document.querySelector("#passo").value)
        if (passo >= 26) {
            passo = passo - 26
        } else if (passo <= -26) {
            passo = passo + 26
        }
        var extra = arrayTexto[i] + passo
        if (arrayTexto[i]<65||(arrayTexto[i]>90&&arrayTexto[i]<97)||arrayTexto[i]>122) {
            arrayCrypto.push(String.fromCharCode(arrayTexto[i]))
        } else if (arrayTexto[i] <= 90) {
            if (extra > 90) {
                passo = extra - 91
                arrayTexto[i] = 65
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            } else if (extra < 65) {
                passo = extra - 64
                arrayTexto[i] = 90
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            } else {
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            }
        } else if (arrayTexto[i] >= 97) {
            if (extra > 122) {
                passo = extra - 123
                arrayTexto[i] = 97
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            } else if (extra < 97) {
                passo = extra - 96
                arrayTexto[i] = 122
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            } else {
                arrayCrypto.push(String.fromCharCode(arrayTexto[i] + (passo)));
            }
        }
    }
    inputSaida.value = arrayCrypto.join("")

    arrayCrypto = []
    extra = null
    arrayTexto = []


}

function desconverteDeCripto() {
    for (var j = 0; j < arrayTexto.length; j++) {
        var passo = (parseInt(document.querySelector("#passo").value)) * -1
        if (passo >= 26) {
            passo = passo - 26
        } else if (passo <= -26) {
            passo = passo + 26
        }
        var extra = arrayTexto[j] + passo
        if (arrayTexto[j]<65||(arrayTexto[j]>90&&arrayTexto[j]<97)||arrayTexto[j]>122) {
            arrayCrypto.push(String.fromCharCode(arrayTexto[j]))
        } else if (arrayTexto[j] <= 90) {
            if (extra > 90) {
                passo = extra - 91
                arrayTexto[j] = 65
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            } else if (extra < 65) {
                passo = extra - 64
                arrayTexto[j] = 90
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            } else {
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            }
        } else if (arrayTexto[j] >= 97) {
            if (extra > 122) {
                passo = extra - 123
                arrayTexto[j] = 97
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            } else if (extra < 97) {
                passo = extra - 96
                arrayTexto[j] = 122
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            } else {
                arrayCrypto.push(String.fromCharCode(arrayTexto[j] + (passo)));
            }
        }
    }

    inputSaida.value = arrayCrypto.join("")
  
    arrayCrypto = []
    extra = null
    arrayTexto = []

}