async function getContent() {
        try {
            const response = await fetch('https://api.github.com/users/baptixta')
            const data = await response.json()

            getInfo(data)
        } catch (error) {
            console.log(error)
        }
}

getContent()

// Getting info from Github API
function getInfo(el) {
    // Avatar
    let avatarValue = `${el.avatar_url}`
    let avatarPicture = document.querySelector('.card-avatar-img') 
    avatarPicture.setAttribute("src", avatarValue)

    // Name
    let nameValue = `${el.name}`
    let nameText = document.querySelector('.card-avatar-name') 
    nameText.innerHTML = nameValue

    // Location
    let locationValue = `${el.location}`
    let locationText = document.querySelector('.card-avatar-location') 
    locationText.innerHTML = locationValue

    // Bio
    let bioValue = `${el.bio}`
    let bioText = document.querySelector('.card-avatar-bio') 
    bioText.innerHTML = bioValue
}

