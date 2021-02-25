let readline = require('readline');
//require importa bibliotecas ou arquivos para o programa
let interface = readline.createInterface(process.stdin,
process.stdout);
interface.question("Digite o Horário:",
(resposta1)=> {
hora= parseInt(resposta1);

if (hora===00){
    hora=24;
}

if ((hora>=7) && (hora<12)){
   interface.write("Bom Dia!")
}

else if ((hora>=12) && (hora<18)){
    interface.write("Boa Tarde!")
}

else if ((hora>=18) && (hora<24)){
    interface.write("Boa Noite!")
}
else{
    interface.write("Vá dormir!")
}
 interface.close();

 });

