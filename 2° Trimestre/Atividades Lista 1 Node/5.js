
// Escreva um programa em node/javaScript que pergunte a operação que usuário deseja, que pode ser soma,
// subtração, divisão ou multiplicação, depois solicite dois valores e execute a operação escolhida nestes valores.

let readline = require('readline');
//require importa bibliotecas ou arquivos para o programa
let interface = readline.createInterface(process.stdin,
process.stdout);

interface.question("olá, digite seu peso: ",
(peso)=> {
 interface.question("agora digite sua altura: ",
 (altura)=> {
    
let IMC = (
             (parseInt(peso)) / (((parseInt(altura)) * (parseInt(altura)))/10000) //O /10000 é para converter os valores de cm para metro
  ).toFixed(1) //Arredondar casas decimais

let Sit = "";

if (IMC < 18.5) {
    Sit = "Magreza"
}

else if ((IMC >= 18.5) && (IMC <25)) {
    Sit = "Saudável"
}

else if ((IMC >= 25) && (IMC <30)) {
    Sit = "Sobrepeso"
}

else if ((IMC >= 30) && (IMC <34)) {
    Sit = "Obesidade Grau I"
}

else if ((IMC >= 35) && (IMC <40)) {
    Sit = "Obesidade Grau II (severa)"
}

else {
    Sit = "Obesidade Grau III (mórbida)"
}

interface.write(
     "Seu IMC é: " + IMC + " = "+ Sit
 );

  

 
 interface.close();
 });
 });