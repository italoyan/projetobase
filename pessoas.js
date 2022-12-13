
const pessoas = [
    {
        nome: "Ana",
        genero: "F"
    },
    {
        nome: "Beto",
        genero: "M"
    },
    {
        nome: "Caio",
        genero: "M"
    },
    {
        nome: "Dani",
        genero: "F"
    }
];

function listar() {
    for(let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i]);
    }
}

listar();

function listar_por_genero(genero) {
    const pessoasFilter = pessoas.filter(pessoa => pessoa.genero === genero);
    console.log(pessoasFilter);
}
listar_por_genero('F')
listar_por_genero('M')