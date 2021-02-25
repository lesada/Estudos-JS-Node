let express = require('express');
let mysql = require('mysql');
let app = express();
let conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prova'
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

//1 - Inserir
app.get("/adicionarProjeto",(req,res) =>{
    let nome = req.query.nome;
    let linguagem = req.query.linguagem;
    let horas_previstas = req.query.horas_previstas;
    let horas_executadas = req.query.horas_executadas;


    if(!nome||!linguagem||!horas_previstas){
        res.status(400).send("Nome, linguaguem e horas previstas são obrigatórios");
    } 
    else if (horas_executadas != null){
        res.status(400).send("Horas executadas não podem ser definidas na inserção, somente na atualização");
    }
    
    else{
        if (linguagem =="java" || linguagem =="phyton" ||linguagem =="c" ||linguagem =="javascript" ||linguagem =="php" ||linguagem =="go" || linguagem =="kotlin" || linguagem== "visual basic") {
    
            conexao.query("INSERT INTO projeto (nome, linguagem, horas_previstas) "+
            " VALUES(?,?,?)",[nome,linguagem,horas_previstas],(erro,resultado) =>{
                if(erro) {
                    console.log(erro);
                    res.status(500).send("Erro inesperado");
                } else {
                    res.send(nome+" cadastrado com sucesso!!");
                }
           
             });
        }
    
        else {
                res.status(400).send("A linguagem é não aceita!");
        } 
    }
}); // Termina o código de inserção


//2 - Listar
app.get("/listarProjeto", (req,res) => {
    conexao.query ("SELECT * FROM projeto", [],
   (erro,resultado) =>{
        if(erro) {
            console.log(erro);
            res.status(500).send("Erro inesperado");
        } else {
            res.send(resultado);
        }
    });
}); //Termina listar

//3 - Recuperar projeto
app.get("/projeto",(req,res) => {
    ///req.params.id;
    let id = req.query.id;
    if (!id) {
        res.status(400).send("Erro: Digite um Id!")
    }

    else {
        conexao.query("SELECT * FROM projeto WHERE id=?",[id],
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
}); //Termina recuperar




//4 - Remover o projeto
app.get("/removerProjeto", (req,res) => {
    let id = req.query.id;
    if (!id) {
        res.status(400).send("Digite um Id!")
    }
    else{
    conexao.query ("DELETE from projeto where id=?", [id],
    (erro, resposta) => {
        if(erro) {
            console.log(erro);
            res.status(500).send("Erro inesperado!");
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
}); //Termina remover

//Atualizar o projeto
app.get("/atualizarProjeto", (req,res)=>{
    let id = req.query.id;
    let nome = req.query.nome;
    let linguagem = req.query.linguagem;
    let horas_previstas = req.query.horas_previstas;
    let horas_executadas = req.query.horas_executadas;

    if(!nome||!horas_previstas){
        res.status(400).send("Nome, linguaguem e horas previstas são obrigatórios");
    } 
    else if (horas_executadas > (horas_previstas*2)){
        res.status(400).send("Horas executadas não pode exceder o dobro de horas previstas");
    }
    else if (linguagem!=null){
        res.status(400).send("Linguagem não pode ser atualizada");
    }

    else{
        if (!id) {
            res.status(400).send("Digite um Id!");
            return;
        }

        conexao.query("UPDATE projeto set nome=?, horas_previstas=?, horas_executadas=? where id=?", [nome, horas_previstas,horas_executadas, id],(erro,resultado) =>{

        if(erro) {
            console.log(erro);
            res.status(500).send("Erro inesperado");
        }
        else {
            if (!resultado.affectedRows){
                res.status(404).send("id não existe");
            }
            else{
                res.send(nome + " Atualizado com sucesso");
            }
        }
    }
    )
}
}) //Feito




app.listen(3000);


