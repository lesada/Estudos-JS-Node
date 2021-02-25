let express = require('express');
let app = express();

app.get('/calculadora/:operacao/:valor1/:valor2', (req, res) => {
    let operacao= req.params.operacao;
    let valor1 = parseFloat(req.params.valor1);
    let valor2 = parseFloat(req.params.valor2);

    if (operacao== "Adicao") {
        let total = valor1+valor2;
        res.send('Soma dos valores é:'+total);

    }
    
    else if (operacao== "Subtracao") {
        let total = valor1-valor2;
        res.send('A subtração dos valores é:'+total);

    }
    
    else if (operacao== "Multiplicacao") {
        let total = valor1*valor2;
        res.send('A multiplicação dos valores é:'+total);

    }
    
    
    else if (operacao== "Divisao") {
        let total = valor1/valor2;
        res.send('A divisão dos valores é:'+total);

    }
});

   app.listen(3000, () => {
    console.log("Servidor executando no endereço http://127.0.0.1:3000");   
 }); 