var circle = document.getElementById("circle")
var circlearray = circle.textContent.split('')
circle.textContent = ''
for (var i = 0; i < circlearray.length; i++) {
    circle.innerHTML += '<span style="transform:rotate(' + ((i + 1) * 14.5) + 'deg)">' + circlearray[i] + '</span>'
}


var circle3 = document.getElementById("circle-inner");
var circlearray3 = circle3.textContent.split('')
circle3.textContent = ''
for (var i = 0; i < circlearray3.length; i++) {
    circle3.innerHTML += '<span style="transform:rotate(' + ((i + 13) * 14.5) + 'deg)">' + circlearray3[i] + '</span>'
}


document.querySelector("#btnDecifrar").addEventListener("click", function () {
    const nodeList = document.querySelectorAll(".nome");
    for (i = 0; i < nodeList.length; i++) {
        nodeList[i].innerText = "descriptografar"
    }
    codificar.classList.add("hidden")
    decodificar.classList.remove("hidden")
})


document.querySelector("#btnCifrar").addEventListener("click", function () {
    const nodeList = document.querySelectorAll(".nome");
    for (i = 0; i < nodeList.length; i++) {
        nodeList[i].innerText = "criptografar"
    }
    codificar.classList.remove("hidden")
    decodificar.classList.add("hidden")
})

var caixa = document.querySelector("#caixaDeSelecao")
caixa.addEventListener("change", function () {
    if (caixa.selectedIndex == 2) {
        document.querySelector("#passo").classList.add("hidden")
        document.querySelector("#passoLabel").classList.add("hidden")

        if (document.querySelector("#b64text").classList.contains("hidden")) {
            document.querySelector("#b64text").classList.remove("hidden")
            document.querySelector("#cifratext").classList.add("hidden")
            document.querySelector("#deciframe").classList.add("hidden")
        }


        codificar.addEventListener("click", function () {

            converteEmB64()

        })
        decodificar.addEventListener("click", function () {

            desconverteDeB64()

        })


    } else if (caixa.selectedIndex == 1) {
        document.querySelector("#passo").classList.remove("hidden")
        document.querySelector("#passoLabel").classList.remove("hidden")


        if (document.querySelector("#cifratext").classList.contains("hidden")) {
            document.querySelector("#cifratext").classList.remove("hidden")
            document.querySelector("#b64text").classList.add("hidden")
            document.querySelector("#deciframe").classList.add("hidden")
        }
        codificar.addEventListener("click", function () {

            converteEmASCII()
            converteEmCripto()

        })
        decodificar.addEventListener("click", function () {

            converteEmASCII()
            desconverteDeCripto()


        })

    } else if (caixa.selectedIndex === 0) {
        document.querySelector("#passo").classList.add("hidden")
        document.querySelector("#passoLabel").classList.add("hidden")
        document.querySelector("#cifratext").classList.add("hidden")
        document.querySelector("#b64text").classList.add("hidden")
        document.querySelector("#deciframe").classList.remove("hidden")
    }

})