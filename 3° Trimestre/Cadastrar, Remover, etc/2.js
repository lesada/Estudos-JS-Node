let express = require('express');
let mysql = require('mysql');
let app = express();
let conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblio'
});

conexao.connect(
    (erro) => {
        if (erro) {
            console.log('Erro ao conectar:');
            console.log(erro);
        } else {
            console.log('Conexão realizada com sucesso!');
        }
    }
);


conexao.query("SELECT * FROM livro ", 
             [1,      2,       "joão"], // parâmetros da consulta 
(erro, resultado) => {
    if (erro) {
    // Caso ocorra algum erro na consulta 
    console.log("erro!!!");
    console.log(erro);
    
    } else {
        console.log(resultado);
    }
});

//Recuperar Livro
app.get("/livro",(req,res) => {
    ///req.params.id;
    let id = req.query.id;
    if (!id) {
        res.status(400).send("Digite um Id!")
    }

    else {
        conexao.query("SELECT * FROM livro WHERE id=?",[id],
        (erro,resultado) => {
            if(erro) {
                console.log(erro);
                res.status(500).send("Erro inesperado");
            } 
            
            else {
                if(!resultado[0]){
                    res.status(404).send("id " + id + " não existe!");
                    }
        
                else {
                    res.send(resultado[0]);
                }
            }
        }
        );
    }
}); //Feito


//Listar
app.get("/listarLivro", (req,res) => {
    conexao.query ("SELECT * FROM livro", [],
   (erro,resultado) =>{
        if(erro) {
            console.log(erro);
            res.status(500).send("Erro inesperado");
        } else {
            res.send(resultado);
        }
    });
}); //Feito

//Remover o livro
app.get("/removerLivro", (req,res) => {
    let id = req.query.id;
    if (!id) {
        res.status(400).send("Digite um Id!")
    }
    else{
    conexao.query ("DELETE from livro where id=?", [id],
    (erro, resposta) => {
        if(erro) {
            console.log(erro);
            res.status(500).send("erro inesperado");
        } 
        
        else {
            if(!resposta.affectedRows) {
            res.status(404).send("id " + id + " não existe");            
            }
            else {    
            res.send("id: " + id + " removido com sucesso!")
        }
    }
})
} 
}); //Feito

//Atualizar o Livro
app.get("/atualizarLivro", (req,res)=>{
    let id = req.query.id;
    let titulo = req.query.titulo;
    let autor = req.query.autor;
    let ano_publicacao = req.query.ano_publicacao;
    let editora = req.query.editora;

    

    if(!titulo||!autor||!ano_publicacao||!editora){
        res.status(400).send(" Título, autor, ano de publicação e editora são obrigatórios");
    } 
    else if (ano_publicacao>2020){
        res.status(400).send("Ano de publicação inválido");
    } 
    else if (autor==editora){
        res.status(400).send("O nome do autor deve ser diferente da editora.");
    }


    else{
        if (!id) {
            res.status(400).send("Digite um Id!");
            return;
        }

    conexao.query("UPDATE livro SET titulo=?, autor=?, ano_publicacao=?, editora=? where id=?", [titulo, autor, ano_publicacao, editora, id],
    (erro, resultado) => {
        if (erro) {
            console.log(erro);
            res.status(500).send("Erro inesperado");
        }
        else {
            if (!resultado.affectedRows){
                res.status(404).send("id não existe");
            }
            else{
                res.send(titulo + " Atualizado com sucesso");
            }
        }
    }
    )
}
}) //Feito

app.get("/adicionarLivro",(req,res) =>{
    let titulo = req.query.titulo;
    let autor = req.query.autor;
    let ano_publicacao = req.query.ano_publicacao;
    let editora = req.query.editora;


    if(!titulo||!autor||!ano_publicacao||!editora){
        res.status(400).send(" Título, autor, ano de publicação e editora são obrigatórios");
    } 
    else if (ano_publicacao>2020){
        res.status(400).send("Ano de publicação inválido");
    } 
    else if (autor==editora){
        res.status(400).send("O nome do autor deve ser diferente da editora.");
    }
    else{

        if (!id) {
            res.status(400).send("Digite um Id!");
            return;
        }

    conexao.query("INSERT INTO livro(titulo,autor,ano_publicacao,editora) "+
    " VALUES(?,?,?,?)",[titulo,autor, ano_publicacao, editora],(erro,resultado) =>{
        if(erro) {
            console.log(erro);
            res.send("Deu erro");
        } else {
            if (!resultado.affectedRows){
                res.status(404).send("id não existe");
            }
            else{
                res.send(titulo + " Atualizado com sucesso");
            }
        }
    });
}
});


app.listen(3000);


