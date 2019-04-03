//chamando outros modulos, ou seja, outro documento que vc criou modulos dentro

var SomaFunc = require("./somar")//chamando um modolo de outro arquivo

var SubFunc = require("./sub")//chamando um modolo de outro arquivo

console.log(SomaFunc(1,2));
console.log(SubFunc(10,5));

function multi(a,b){
	return a*b;
}

function div(a,b){
	return a/b;
}

console.log(multi(5,5));

console.log(div(10,2));