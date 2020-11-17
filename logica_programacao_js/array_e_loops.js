var videioGames = ["Switch", "PS4", "XBOX", "PS5"];
for (var item = 0; item < videioGames.length; item++) {
  console.log(videioGames[item]);
}

//var ultimoItem = videioGame.pop(); para aparecer somente o ultimo item
/*
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

function fibonacci() {
  var n1 = 0;
  var n2 = 1;
  var prox = 1;
  var i;

  for (i = 0; i < 100; i++) {
    console.log(prox);
    prox = n2 + n1;
    n1 = n2;
    n2 = prox;
  }
}

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = ["1959", "1962", "1970", "1994", "2002"];
for (var copa = 0; copa < copaBrasil.length; copa++) {
  console.log("O Brasil ganho a copa de: ", copaBrasil[copa]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância", "kaki"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta;
ultimaFruta = frutas.pop();
