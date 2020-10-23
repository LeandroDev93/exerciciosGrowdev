/*
    Exercício 2
    Leia a seguinte lista e imprima na tela
        * Nome
        * Maior de Idade (para idade >= 18) ou Menor de idade (para idade < 18)
*/
const lista = [
    {
        "nome": "Roger Medeiros",
        "idade": 39
    },
    {
        "nome": "Maria Silva",
        "idade": 19
    },
    {
        "nome": "Julius",
        "idade": 55
    },
    {
        "nome": "André Mathias",
        "idade": 23
    },
    {
        "nome": "Chris",
        "idade": 12
    },
    {
        "nome": "Tonia",
        "idade": 9
    },
    {
        "nome": "Linus",
        "idade": 62
    },
];
// Percorrer a lista
for(var pessoa of lista){
    console.log(pessoa.nome)
    console.log(pessoa.idade < 18 ? "Menor de idade" : "Maior de idade")
}
/* 
for (var pessoa of lista) {
    document.writeln(pessoa.nome, "<br>", pessoa.idade)
    document.writeln(pessoa.idade < 18 ? "Menor de idade" : "Maior de idade")
}*/