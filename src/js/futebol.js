function pulaLinha() {
	document.write("<br>");
	document.write("<br>");
}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o número de vitórias."));

var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = (vitorias * 3) + empates;

mostra("Os pontos do seu time são: " + pontos);

if (pontos > 28) {
	mostra("Seu time está melhor do que o ano passado.");
} else {
	if (pontos < 28) {
		mostra("Seu time está pior do que ano passado");
	} else {
		mostra("Seu time está igual ao ano passado");
	}
}

mostra("FIM");