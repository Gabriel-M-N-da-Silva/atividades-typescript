// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


//----------SOLUÇÃO----------
// Como podemos melhorar o esse código usando TS? 

enum Profissao{
    Atriz,
    Padeiro
}

interface pessoa {
    nome: string;
    idade: number;
    profissao:Profissao;
}

let pessoa1:pessoa=  {
    nome:"Maria",
    idade:29,
    profissao:Profissao.Atriz,
};

let pessoa2:pessoa = {
    nome:"Roberto",
    idade:19,
    profissao:Profissao.Padeiro,
};

let pessoa3:pessoa = {
    nome:"Laura",
    idade:32,
    profissao:Profissao.Atriz,
};

let pessoa4:pessoa = {
    nome:"Carlos",
    idade:19,
    profissao:Profissao.Padeiro,
};