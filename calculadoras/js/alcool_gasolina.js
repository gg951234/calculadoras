function combustivel(){

let calcularCombustivel = document.querySelector("#calcularCombustivel")
let resultadoCombustivel = document.querySelector("#resultadoCombustivel")

calcularCombustivel.addEventListener("click", function(){


    const gasolina = document.getElementById("gasolina").value
    const etanol = document.getElementById("etanol").value


    let resultado = calcularcombustivel(gasolina,etanol)

    resultadoCombustivel.innerHTML = resultado.classificacao


    resultadoCombustivel.classList.remove("alertaVermelho", "alertaAmarelo")
    resultadoCombustivel.classList.add(resultado.cor)
})



}



combustivel()


function calcularcombustivel(gasolina,etanol){


    let valorCombustiveis
    let classificacao
    let cor

    valorCombustiveis = etanol/ gasolina * 100

    if(valorCombustiveis > 70){
        classificacao = "Compensa Gasolina"
        cor = "alertaVermelho"
    }
    else {
        classificacao = "Compensa Etanol"
        cor = "alertaAmarelo"
    }
    return {classificacao, cor}

}