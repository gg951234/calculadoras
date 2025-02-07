// função para manipulação do DOM - Document Object Model
function imc(){

    //variáveis locais para o botão e o resultado
    let botaoImc = document.querySelector("#calcularImc")
    let resultadoImc = document.querySelector("#resultadoImc")

    botaoImc.addEventListener("click",function(){
        //Recupera os valores dos campos de texto
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value

        //resultado é um objeto em Javascript
        let resultado = calcularIMC(altura,peso)

        //Mostra o resultado para o usuário
        resultadoImc.innerHTML = resultado.classificacao

        //aplicar as classes de css de acordo com a variavel cor
        resultadoImc.classList.remove("alertaVermelho", "alertaAmarelo", "AlertaVerde")
        resultadoImc.classList.add(resultado.cor)
    })

}

//Chamar a função princiapal
imc()

function calcularIMC(altura, peso){
    let valorIMC
    let classificacao
    let cor

    //Aplica a formula do IMC
    valorIMC = peso / (altura * altura)

    //Interpretar o resultador do IMC
    if(valorIMC < 18.5){
        classificacao = "Magreza"
        cor = "alertaVermelho"
    }
    else if (valorIMC <24.9){
        classificacao = "Normal"
        cor = "alertaVerde" 
    }
    else if (valorIMC <29.9){
        classificacao = "Sobrepeso"
        cor = "alertaAmarelo"
    } 
    else{
        classificacao = "Obesidade"
        cor = "alertaVermelho"
    }

    return {classificacao, cor}
}