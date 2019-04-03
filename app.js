const express = require("express"); //carregando um modulo
const app = express(); //criando uma copia do modulo dentro da variavel

//criando uma rota
app.get("/", function(req, res){
	res.sendFile(__dirname+ "/html/index.html")//__dirname diretorio raiz)//mandando um arquivo, e dizendo onde le ta
});

app.get("/sobre", function(req, res){
	res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
	res.send("Bem vindo ao meu blog");
});
// Criando parametros 
app.get('/ola/:nome/:cargo', function(req, res){
	res.send("<h1>ola, Bem Vindo"+req.params.nome+"</h1>");//teste com HTML
})

app.listen(8081, function(){
	console.log("Servidor rodando na url http://localhost:8081");
}); //Essa função obrigatoriamente deve ser a ultima do codigo

// send significa MANDAR e file ARQUIVO

