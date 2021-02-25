create database biblio;
use biblio;

alter user 'root'@'localhost' 
identified with mysql_native_password by 'root';

CREATE TABLE livro (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(50) NOT NULL,
autor VARCHAR(100),
ano_publicacao INT,
editora VARCHAR(100)
);

select * from livros;