//  http://127.0.0.1:3000/ola?hora={hora}
// Que retorne:
// “Bom dia” se hora for entre 7h e 12h;
// “Boa tarde” se hora for entre 12h e 18h;
// “Boa noite” se hora for entre 18h e 00h;
// “Vá dormir” se hora for entre 00h e 7h;


let express = require('express');
let app = express();
app.get('/', (req, res) => {
 res.send('Olá, mundo!');
});

app.get('/ola/:hora', (req, res) => {
    let hora = req.params.hora;

if (hora===00){
        hora = 24;
    }
    if ((hora>=7) && (hora<12)) {
         res.send("Bom Dia")
    }
    else if ((hora>=12) && (hora<18)) {
         res.send("Boa Tarde")
    }
    else if ((hora>=18) && (hora<24)) {
         res.send("Boa Noite")
    }
    else {
         res.send("Vá dormir!")
    }
   });

//   // app.get('/soma/:valor1/:valor2', (req, res) => {
//     let valor1 = parseFloat(req.params.valor1);
//     let valor2 = parseFloat(req.params.valor2);
//     let total = valor1+valor2;
//     res.send('Soma dos valores é:'+total);
//    });
   
   


app.listen(3000, () => {
 console.log("Servidor executando no endereço http://127.0.0.1:3000");
});
