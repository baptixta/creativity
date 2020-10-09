const btnDiscover = document.querySelector('#js-discover')
const modal = document.querySelector('.modal')
const btnHero = document.querySelectorAll('#js-btn')
const picture = document.querySelector('.picture')
const name = document.querySelector('.name')
const age = document.querySelector('.age')


// Getting JSON data
async function getHeroes(){
    const response = await fetch('http://localhost:3000/herois.json')
    const data = await response.json()

    getInfo(data)
} 

// Showing Heroes available
btnDiscover.addEventListener('click', () => {
    getHeroes()
    modal.style.display = "flex"
})

// Getting info from JSON and displaying it on screen
function getInfo(hero) {
    let heroList = hero.herois

    btnHero.forEach((btn) => {
        btn.addEventListener('click', () => {
            let heroName = btn.innerHTML
            let heroSelected = heroList[`${heroName}`]

            picture.src = heroSelected[0].imagem
            name.innerHTML = heroSelected[0].nome
            age.innerHTML = heroSelected[0].idade            
            modal.style.display = "none"
        })
    })
}


