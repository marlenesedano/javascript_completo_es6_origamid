var possuiGraduacao = false;
var x;
if (possuiGraduacao) {
   console.log("É verdade");
   x = 10;
} else {
   console.log("É falso");
}
console.log(x);

//SWITCH
var corFavorita = "Vermelho";

switch (corFavorita) {
   case "Azul":
     console.log("Olhe para o céu.");
     break;
   case "Vermelho":
     console.log("Olhe para as rosas");
     break;
   case "Amarelo":
     console.log("Olhe para o sol.");
     break;
   default:
     console.log("feche os ohos");
}

//-EXERCICIO
var idadeEu = 34;
var idadeEsposo = 25;

if (idadeEu < idadeEsposo) {
  console.log("Eu sou mais velha");
} else if (idadeEu === idadeEsposo) {
  console.log("É igual");
} else {
  console.log("meu amor é mais velho");
}

var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

var nome = "Marlene";
var idade = 24;
var possuiDourado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDourado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O brasil tem maior população");
} else {
  console.log("A china tem maior população");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && " Cão");
} else {
  console.log("falso");
}
