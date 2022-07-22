function pulaLinha() {
	document.write("<br>");
	document.write("<br>");
}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

function calculaImc(altura, peso) {
	var imc = peso / (altura * altura);
	mostra("Os imc de exemplo calculado é " + imc);
}

calculaImc(1.71, 73);
calculaImc(1.72, 68);

function calculaImc2(altura2, peso2) {
	return peso2 / (altura2 * altura2);
}

var imcFlavio = calculaImc2(1.71, 73);
var imcAmigo = calculaImc2(172, 68);
var totalImc = calculaImc2(1.71, 73) + imcAmigo;

mostra("A soma dos imc's entre Flavio e seu amigo é " + totalImc);

function calculaImc3(altura3, peso3) {
	return peso3 / (altura3 * altura3);
}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc3(alturaInformada, pesoInformado);

mostra(nome + ", o seu IMC calculado é " + imc);

if(imc < 18.5) {
	mostra("Você está abaixo do recomendado");
}

if(imc > 35) {
	mostra("Você está acima do recomendado");
}

if(imc >= 18.5 && imc <= 35) {
	mostra("Seu IMC está excelente!");
}