const randomNameBtn = document.querySelector('.container button')
let nameString = document.querySelector('.container p')
const character = [
    "John", "Dave", "William", "Silva",
    "Denis", "Joe", "Suzan", "Gabrielle",
    "Rafaela", "Davi", "Troy", "Yuri"
]

function randomizeName() {
    nameString.innerHTML = ""
    let randomName = names[Math.floor(Math.random()*names.length)]
    nameString.innerHTML = randomName   
}


// Generator
randomNameBtn.addEventListener('click', () => {
    randomizeName()
})
