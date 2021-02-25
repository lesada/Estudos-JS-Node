let express = require('express');
let app = express();

app.get('/vogais/:texto', (req, res) => {
    let texto = req.params.texto;
    texto = texto.toLowerCase(); //valida letras maiusculas
    let i;
    let quant = 0;

    for (i = 0; i < texto.length; i++) { 

        if(texto[i]=='a' || texto[i]=='e' || texto[i]=='i' || texto[i]=='o' || texto[i]=='u') {
            quant ++;
        }

    }

    res.send("O número de vogais é " + quant);
});

   app.listen(3000, () => {
    console.log("Servidor executando no endereço http://127.0.0.1:3000");   


    


});