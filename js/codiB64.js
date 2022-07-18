// receber a informação do usuário 
// [A-Z],[a-z],[0-9], "/" e "+"
//



function converteEmB64() {
    var textoEntrada = input.value
    textoSaida.value = window.btoa(textoEntrada)

}

function desconverteDeB64() {
    var textoEntrada = input.value
    textoSaida.value = window.atob(textoEntrada)
}