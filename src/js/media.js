function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

mostra("Olá pessoal!");

var ano = 2016;

mostra("Flávio tem  " + (ano - 1977) + " anos");

mostra("Joaquim tem " + (ano - 1996) + " anos");

ano = 2017;

mostra("Barney tem " + (ano -1976) + " anos");

var idadeFlavio = 39;
var idadeJoaquim = 20;
var idadeBarney = 41;

var media = (idadeFlavio + idadeJoaquim + idadeBarney)/3;

mostra("A média das idades é " + Math.round(media));

var nome = "Flávio";

mostra("A idade de " + nome + " é " + idadeFlavio);