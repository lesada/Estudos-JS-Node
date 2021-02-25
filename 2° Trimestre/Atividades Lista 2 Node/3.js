// http://127.0.0.1:3000/imc?peso={peso}&altura={altura}

let express = require('express');
let app = express();

app.get('/imc', (req, res) => {
    let peso = parseFloat(req.query.peso);
    let altura = parseFloat(req.query.altura);


    let IMC = (
        ((peso) / ((altura) * (altura))*10000) //O /10000 é para converter os valores de cm para metro
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
    
    res.send('Sua situação é ' + IMC + " - " +Sit);
});

   app.listen(3000, () => {
    console.log("Servidor executando no endereço http://127.0.0.1:3000");   
 }); 