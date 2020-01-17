/* FUNÇÕES */

function soma(n1, n2){
    return n1 + n2;
};

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};

function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar =  false;
    }
    return validar;
}

var idade = prompt('Qual sua idade? ');
console.log(validaIdade(idade));


//alert(soma(5,10));
//alert(setReplace('Vai Japão', 'Japão', 'Brasil'));

/* CONDICIONAIS, LAÇOS DE REPETIÇAO E DATE */

/* DATE */
/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/
/* FOR */

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

/* wHILE */
/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/

/* IF ELSE */
//var idade = 18;
/*var idade = prompt('Qual sua idade?');

if(idade >= 18){
    alert('Maior de idade');
}else{
    alert('Menor de idade')
}
*/

/* ARRAY E DICIONÁRIO */

/*var frutas = [{nome: 'maça', cor: 'vermelha'},{nome: 'uva', cor: 'roxa'}];
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome: 'maça', cor: 'vermelha'}
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista =  ['maça', 'pêra', 'laranja'];
//lista.push('uva');
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join('-'));



//var nome = 'Gilson Souza';
//var n1 = 5;
//var n2 = 3;
//var frase = 'Japão é o melhor time do Mundo';
//alert(nome + ' tem ' + idade + ' anos ');
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace('Japão', 'Brasil'));