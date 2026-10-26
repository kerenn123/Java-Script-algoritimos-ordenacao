const livros = require(`./listaL
for (let atual=0; atual < livros.length; atual++){
     let menor = menorValor(livros, atual);
     let livrosAtual = livros[atual];
     let livrosMenorPreco = livros[menor];

     livros[atual] =livrosMenorPreco;
     livros[menor] = livrosAtual;
}

console.log(livros);