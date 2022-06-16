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
    let background = document.querySelector('body')

    if (true) {
        background.style.backgroundImage = 'url("images/darkSpace.jpg")';
        background.style.backgroundSize = 'contain'
        
        document.querySelector('.github').src = 'images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
        let text = document.getElementsByTagName('*')
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "white";
        }
        
        document.querySelector('.nav-btn:hover').style.boxShadow = "0 0 20px #66FCF1, 0 0 20px #66FCF1 inset";
        document.querySelector('.nav-btn:hover').style.border = "3px solid #66FCF1"
    }
}
