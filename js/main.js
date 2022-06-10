fetch("https://fakeface.rest/face/json")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.testimonyPic').src = data.image_url
    })

document.querySelector('.theme').addEventListener('click', switchTheme)
    
function switchTheme() {
    let background = document.querySelector('body').style.background

    if (background === "black") {
        document.querySelector('body').style.background = "white"
    } else {
        document.querySelector('body').style.background = "black"
    }
}
