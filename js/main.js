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
    background.classList.toggle("body-darkM")
    document.querySelector('.github').classList.toggle("github-darkM")
    
    document.querySelector("p").classList.toggle("nav-btn-darkM")
    
    if (true) {
        // let text = document.getElementsByTagName('*')
        // for (let i = 0; i < text.length; i++) {
        //     text[i].style.color = "white";
        // }
        
        document.querySelector('.nav-btn:hover').style.boxShadow = "0 0 20px #66FCF1, 0 0 20px #66FCF1 inset";
        document.querySelector('.nav-btn:hover').style.border = "3px solid #66FCF1"
    }
}
