fetch("https://fakeface.rest/face/json")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.testimonyPic1').src = data.image_url
    })

fetch("https://fakeface.rest/face/json")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.testimonyPic2').src = data.image_url
})

fetch("https://fakeface.rest/face/json")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.testimonyPic3').src = data.image_url
})

document.querySelector('.theme').addEventListener('click', switchTheme)
    
function switchTheme() {
    let background = document.querySelector('body').style.background

    if (background === "rgb(34, 38, 41)") {
        document.querySelector('body').style.background = "rgb(92, 219, 149)"
    } else {
        document.querySelector('body').style.background = "rgb(34, 38, 41)"
    }
}
