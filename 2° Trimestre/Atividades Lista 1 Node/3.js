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
interface.question("olá, digite o terceiro número:",
(resposta4)=> {     

    a=parseInt(resposta1);
    b=parseInt(resposta2);
    c=parseInt(resposta3);
    d=parseInt(resposta4);

 interface.write("O maior número digitado é: " + Math.max(a,b,c,d) );
 interface.close();
 });
 });
});
});