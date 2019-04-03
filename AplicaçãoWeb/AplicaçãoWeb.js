 // usando modulo HTTP:// 
 // Usa-se um framework expresse psra melhorar 

 var http = require('http');//criando o modulo

 http.createServer(function(req, res){
 	res.end("Olá");
 }).listen(8081);
/*abrirndo e criando um servidor http linten é pra dizer qual a porta vc quer abrir
O CreatServer pode receber dois parametros req de requisição e res de resposta, mandar res
para o usuario
A cada alteração no codigo para elerodar no navegado deve-se fechar o servido dnado ctrl+c
e inicialo novamente*/

 console.log ("Servidor rodando");