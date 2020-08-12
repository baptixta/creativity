const randomNameBtn = document.querySelector('.container button')
let nameString = document.querySelector('.name span')
let raceString = document.querySelector('.race span')
let skillString = document.querySelector('.skill span')
// Data
const name = [
    "John", "Dave", "William", "Silva",
    "Denis", "Joe", "Suzan", "Gabrielle",
    "Rafaela", "Davi", "Troy", "Yuri", "Nalu"
]

const race = [
    "Orf", "Human", "Troll", "Dwarf",
    "Alien", "Cat", "Dog", "Wolf", "Zombie"
]

const skill = [
    "Wizard", "Berserk", "Warrior",
    "Paladin", "Monk", "Ranger",
    "Cleric", "Bard", "Fighter"
]

// Randomizing Data
function random(item, string) {
    let randomize = item[Math.floor(Math.random()*item.length)] 
    string.innerHTML = randomize 
}

// Generators
randomNameBtn.addEventListener('click', () => {
    random(name, nameString)
    random(race, raceString)
    random(skill, skillString)
}) 
