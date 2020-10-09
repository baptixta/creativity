const heroi = [
    {
        nome: 'John Cena',
        arma: 'Espada',
        poder: 'Invisibilidade'            
    },
    {
        nome: 'Cebolinha',
        arma: 'Twitter',
        poder: 'Cancelamento'            
    }
]

function AtualizarHeroi(nome, propriedade, valor) {
    let heroiEncontrado = heroi.filter((item) => {
        return item.nome == nome
    })

    let heroiEncontradoAtual = heroiEncontrado[0]

    heroiEncontradoAtual[propriedade] = valor

    console.log(heroiEncontradoAtual)
}

AtualizarHeroi('John Cena', 'cidade', 'Rio de Janeiro') 