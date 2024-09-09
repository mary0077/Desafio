// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function contarA(string) {
    let contador = 0;
    for (let letra of string.toLowerCase()) {
      if (letra === 'a') {
        contador++;
      }
    }
    return contador;
  }
  
  const texto = "JavaScript é uma linguagem de programação";
  
  const contagem = contarA(texto);
  console.log(`A letra 'a' aparece ${contagem} vezes.`);
  