enum Profissao{
    Professora,
    Atriz,
    Dev,
    Escritora
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Dev
}
const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Dev
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 25,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Calc3']
}
const monica: Estudante = {
    nome: 'Monica',
    idade: 25,
    profissao: Profissao.Professora,
    materias: ['Matematica', 'Calc3']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);