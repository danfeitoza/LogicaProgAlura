function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var numeroTabuada = parseInt(prompt("Entre o número que deseja saber a tabuada:"));

for(var multiplicador = 1; multiplicador <=10; multiplicador++) {
    mostra("A tabuada de " + numeroTabuada + " * " + multiplicador + " = " + numeroTabuada * multiplicador);
}

mostra("FIM")