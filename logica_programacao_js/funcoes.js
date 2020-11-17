function areaQuadrado(lado) {
  return lado;
}
areaQuadrado(2);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
//console.log(imc(44, 1.6));
function corFavorita(cor) {
  if (cor == "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return " Sem chance de gostar dessa cor";
  } else {
    cor != "azul" || cor != "verde";
    return "voce não escolheu nem azul ou verde";
  }
}

addEventListener("dblclick", function () {
  console.log("Oi");
});

var profissao = "Dev Front-End";
function dados() {
  var nome = "Marlene";
  var idade = 24;
  function outrosDados() {
    var endereco = "Mato Grosso do Sul";

    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());

//EXERCICIO FUNÇOES
//crie uma função para verificar se o valor é Truthy

function isTrunthy(dado) {
  return !!dado;
}
//CRIE UMA FUNÇÃO QUE RETORNE O PERIMETRO DE UM QUADRADO 0BS: PERIMETRO É A SOMA DOS QUATRO LADOS DO QUADRADO
function perimetroQuadrado(lado) {
  lado = lado * 4;
  return lado;
}

//CRIE UMA FUNÇÃO QUE RETORNE SEU NOME COMPLETO
function nomeCopleto(nome, sobrenome) {
  //nome = "Marlene Sedano";
  return `${nome}  ${sobrenome}`;
}

//CRIAR UMA FUNÇÃO QUE VEJA SE UM NUMERO É PAR

function isEven(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//CRIE UMA FUNÇÃO QUE RETORNE O TIPO DE DADO, DADO O ARGUMENTO PASSADO NELA (TYPEOF)

function tipoDado(dado) {
  return typeof dado;
}

addEventListener("click", function () {
  console.log("Marlene");
});

function precisoVisitar(paisesVisitados) {
  return `Ja Visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}
precisoVisitar(20);
jaVisitei(20);
