function pulaLinha() {
	document.write("<br>");
	document.write("<br>");
}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while(tentativas <= 3) {

var chute = parseInt(prompt("Digite seu chute de 0 a 10!"));

if(chute == numeroPensado) {
    mostra("Acertô, mizeravi! O número pensado era " + numeroPensado);
	break;
} else{
    mostra("Errrou! >.<");
}

tentativas++

}

mostra("FIM");