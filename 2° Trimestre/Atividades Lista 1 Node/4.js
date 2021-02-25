// Escreva um programa em node/javaScript que pergunte a operação que usuário deseja, que pode ser soma,
// subtração, divisão ou multiplicação, depois solicite dois valores e execute a operação escolhida nestes valores.

// Escreva um programa em node/javaScript que solicite 4 valores para o usuário e retorne o maior valor.
let readline = require('readline');
//require importa bibliotecas ou arquivos para o programa
let interface = readline.createInterface(process.stdin,
process.stdout);

interface.question("Adição, Subtração, Multiplicação ou Divisão? ",
(resposta1)=> {
if (resposta1= "Adição") {
    interface.question("agora digite o primeiro número: ",
    (numero1)=> {
   interface.question("agora digite o segundo número: ",
   (numero2)=> {
    interface.write("Resultado:" + (parseInt(numero1)+ parseInt(numero2))); interface.close();
    });
    });

}

if (resposta1= "Subtração") {
    interface.question("agora digite o primeiro número: ",
    (numero1)=> {
   interface.question("agora digite o segundo número: ",
   (numero2)=> {
    interface.write("Resultado:" + (parseInt(numero1) - parseInt(numero2))); interface.close();
    });
    });

}

if (resposta1= "Multiplicação") {
    interface.question("agora digite o primeiro número: ",
    (numero1)=> {
   interface.question("agora digite o segundo número: ",
   (numero2)=> {
    interface.write("Resultado:" + (parseInt(numero1) * parseInt(numero2))); interface.close();
    });
    });

}

if (resposta1= "Divisão") {
    interface.question("agora digite o primeiro número: ",
    (numero1)=> {
   interface.question("agora digite o segundo número: ",
   (numero2)=> {
    interface.write("Resultado:" + (parseInt(numero1)/ parseInt(numero2))); interface.close();
    });
    });

}
});

