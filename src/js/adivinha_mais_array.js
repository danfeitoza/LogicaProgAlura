function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var segredos = [5,7,10,2,3];

var input = document.querySelector("input");
input.focus();

function verifica() {

    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++) {
        if(input.value == segredos[posicao]) {
            alert("Você ACERTOU! :D");
            achou = true;
            break;
        }
    }

    if(achou == false) {
        alert("Você ERROU! >.<");
    }

    input.value = "";
    input.focus();
}

var button = document.querySelector("button")

button.onclick = verifica;