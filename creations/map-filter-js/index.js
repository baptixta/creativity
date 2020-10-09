let container = document.querySelector('div')
let nomes = ['Jonas', 'Davi', 'Felipe', 'Rafinha Bastos', 'Joelma', 'Elon Musk'] 

let filtroTop = nomes.filter((item) => {
    return item != 'Jonas'
})

let show = `<h1>${filtroTop}</h1>`

container.innerHTML = show

