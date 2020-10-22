const container = document.querySelector('.container')
const galleryImage = document.querySelectorAll('.gallery img')

setInterval(() => {
    galleryImage.forEach((element) => {
        if (document.documentElement.clientWidth <= 768) {
            element.setAttribute("src", 'http://placekitten.com/300/300')
        } else {
            element.setAttribute("src", 'http://placekitten.com/550/400')
        }
    })
}, 1000)


