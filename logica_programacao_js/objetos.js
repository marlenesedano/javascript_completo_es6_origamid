var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

//console.log(quadrado.area(5));
//console.log(quadrado.perimetro(5));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

//EXERCICIO
//CRIE UM OBJETO COM OS DADOS PESSOAS

var dadosPessoais = {
  nome: "Marlene",
  sobrenome: "Sedano",
  idade: 24,
  status: "casada",
};

//Crie um método no objeto anterior, que mostre o seu Nome Completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
//alterando o valor da propriedade preço
carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador
//preto com 10 anos que late ao ver um dono

var homem = true;

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "homem") {
      return "latir";
    } else {
      return "nada";
    }
  },
};
