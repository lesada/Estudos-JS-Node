let readline = require('readline');
//require importa bibliotecas ou arquivos para o programa
let interface = readline.createInterface(process.stdin,
process.stdout);

interface.question("olá, digite o primeiro número: ",
(resposta1)=> {
 interface.question("olá, digite o segundo número: ",
 (resposta2)=> {
interface.question("olá, digite o terceiro número:",
(resposta3)=> {
     
    a=parseInt(resposta1);
    b=parseInt(resposta2);
    c=parseInt(resposta3);

 interface.write("A média dos 3 é " + (a
 + b + c ) /3 );
 interface.close();
 });
 });
});
