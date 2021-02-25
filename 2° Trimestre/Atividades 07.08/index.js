let express = require('express');
let app = express();
app.get('/', (req, res) => { //mapea o endereço /= raiz do site
 res.send('Olá, mundo!');
});
app.get("/casa", (req, res)=> {
    res.send("Outra coisa!<button>AQUI</button>");
});

app.listen(8000, () => {
 console.log("Servidor executando no endereço http://127.0.0.1:8000");
});

app.get('/ola/:nome', (req, res) => {
    let nome = req.params.nome;
    res.send('Olá, '+nome+'!');
   
}); 

app.get('/soma/:valor1/:valor2', (req, res) => {
    let valor1 = parseFloat(req.params.valor1);
    let valor2 = parseFloat(req.params.valor2);
    let total = valor1+valor2;
    res.send('Soma dos valores é:'+total);
   });
   
   app.get('/ola2', (req, res) => {
    let nome = req.query.nome;
    res.send('Olá, '+nome+'!');
   });   

   app.get('/soma2', (req, res) => {
    let valor1 = parseFloat(req.query.valor1);
    let valor2 = parseFloat(req.query.valor2);
    let total = valor1+valor2;
    res.send('Soma dos valores é:'+total);
   }); 