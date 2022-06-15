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

    if (background === 'rgb(34, 38, 41)') {
        console.log('hi')
    } else {
        document.querySelector('body').style.background = "rgb(34, 38, 41)";
        let text = document.getElementsByTagName('*')
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "white";
        }
        
        let navBtns = document.querySelectorAll('.nav-btn:hover')
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].style.boxShadow = "0 0 20px #66FCF1, 0 0 20px #66FCF1 inset";
            navBtns[i].style.border = "3px solid #66FCF1";
        }
    }
}
