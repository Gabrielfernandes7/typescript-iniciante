"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Dev"] = 2] = "Dev";
    Profissao[Profissao["Escritora"] = 3] = "Escritora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Dev
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Dev
};
const jessica = {
    nome: 'Jessica',
    idade: 25,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Calc3']
};
const monica = {
    nome: 'Monica',
    idade: 25,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Calc3']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
