const btnCap = document.querySelector('#cap')
const btnHoodie = document.querySelector('#hoodie')
const btnCrown = document.querySelector('#crown')
const cap = document.querySelector('.cap')
const hoodie = document.querySelector('.hoodie')
const crown = document.querySelector('.crown')
const eyeballs = document.querySelectorAll('.eyeball')
const eyebrows = document.querySelectorAll('.eyebrow')


// Setting opacity to "0"
cap.style.opacity = "0"
hoodie.style.opacity = "0"
crown.style.opacity = "0"

// Animating the buttons
btnCap.addEventListener('click', () => {
    hoodie.style.opacity = "0"
    hoodie.style.top = "-150px"
    crown.style.opacity = "0"
    crown.style.top = "-150px"

    eyebrows.forEach(eyebrow => {
    
        eyebrow.style.top = "-20px"

        setTimeout(() => {
            eyebrow.style.top = "-10px"
        }, 700)
    });

    eyeballs.forEach(eyeball => {
    
        eyeball.style.top = "0px"

        setTimeout(() => {
            eyeball.style.top = "20px"
        }, 700)
    });

    cap.style.opacity = "1"
    cap.style.top = "-55px"

    eyeballs.forEach(eyeball => {
        eyeball.classList.add('eyeball-look')

        setTimeout(() => {
            eyeball.classList.remove('eyeball-look')
        }, 1000)
    });
})

btnHoodie.addEventListener('click', () => {
    cap.style.opacity = "0"
    cap.style.top = "-150px"
    crown.style.opacity = "0"
    crown.style.top = "-150px"

    eyebrows.forEach(eyebrow => {
    
        eyebrow.style.top = "-20px"

        setTimeout(() => {
            eyebrow.style.top = "-10px"
        }, 700)
    });

    eyeballs.forEach(eyeball => {
    
        eyeball.style.top = "0px"

        setTimeout(() => {
            eyeball.style.top = "20px"
        }, 700)
    });


    hoodie.style.opacity = "1"
    hoodie.style.top = "-55px"
})

btnCrown.addEventListener('click', () => {
    cap.style.opacity = "0"
    cap.style.top = "-150px"
    hoodie.style.opacity = "0"
    hoodie.style.top = "-150px"

    eyebrows.forEach(eyebrow => {
    
        eyebrow.style.top = "-20px"

        setTimeout(() => {
            eyebrow.style.top = "-10px"
        }, 700)
    });

    eyeballs.forEach(eyeball => {
    
        eyeball.style.top = "0px"

        setTimeout(() => {
            eyeball.style.top = "20px"
        }, 700)
    });


    crown.style.opacity = "1"
    crown.style.top = "-12px"
})