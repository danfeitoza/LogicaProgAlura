function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var segredo = Math.round(Math.random() * 10);

var input = document.querySelector("input");
input.focus();

function verifica() {
    if(input.value == segredo) {
        alert("Você ACERTOU! :D");
    } else {
        alert("Você ERROU! >.<");
    }

    input.value = "";
    input.focus();
}

var button = document.querySelector("button")

button.onclick = verifica;