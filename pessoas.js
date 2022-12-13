
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