create database prova;
use prova;

create table projeto (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome varchar (255) NOT NULL,
 linguagem varchar(20) NOT NULL,
 horas_previstas INT NOT NULL,
 horas_executadas INT
)

select * from projeto;

