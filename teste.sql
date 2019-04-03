CREATE TABLE  usuarios(/*Criando atabela*/
	nome varchar(50),
	email varchar(100),
	idade int /*criando colunas*/
);
/*inserindo dados na tabela*/
insert into usuarios(nome,email,idade) values(
	"LARISSA MORAIS",
	"larisa@gmail.com",
	20
);
insert into usuarios(nome,email,idade) values(
	"joao",
	"joao@gmail.com",
	89
);
insert into usuarios(nome,email,idade) values(
	"pedro MORAIS",
	"pedro@gmail.com",
	35
);
insert into usuarios(nome,email,idade) values(
	"guga",
	"guga@gmail.com",
	29
);
insert into usuarios(nome,email,idade) values(
	"mateus",
	"mateus@gmail.com",
	26
);
insert into usuarios(nome,email,idade) values(
	"lucas",
	"lucas@gmail.com",
	89
);

/*COMANDO SQL*/
/*
SHOW DATABASES; - mostra os bancps que vc tem 
USE (NOME DO BANCO CRIADO) - para entrar no banco
SHOW TABLES; - mostra as tabelas que vc tem
CREATE DATABASE + NODE DO BANCO; para criar um banco
CREATE TABLE + NODE DA TABELA; para criar tabelas 
DESCRIBE + NOME DA TABELA - para mostrar os dados e tipos na tabela
INSERT INTO + NOME DA TABELA + (COLUNAS) + VALUES + (OS VALORES) - para inserir dados
nas colunas da tabla
SELECT *(todos) FROM + NOME DA TABELA - para selecionar todos os dados da tabela 
SELECT *(todos) FROM + NOME DA TABELA + WHERE + PARAMETRO- para seleionar um daod com um 
parametro especifico
DELET FROM + NOME WHERE + CAMPO + (REGISTRO)- para deletar registros especificos
DELET FROM + NOME DA TABELA - deletar TODA a tabela
*/