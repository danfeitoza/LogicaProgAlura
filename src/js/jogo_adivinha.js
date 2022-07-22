function pulaLinha() {
	document.write("<br>");
	document.write("<br>");
}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var chute = parseInt(prompt("Digite seu chute de 0 a 10!"));

if(chute == numeroPensado) {
    mostra("Acertô, mizeravi! :D");
} else{
    mostra("Errrou! >.< O número pensado foi: " + numeroPensado);
}