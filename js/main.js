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
    document.querySelector('body').classList.toggle("body-lightM")
    document.querySelector('.github').classList.toggle("github-lightM")
    
    document.querySelector('.theme').classList.toggle('theme-rotate')

    document.querySelector('.menu').classList.toggle('menu-lightM')
   
    document.querySelector('.nav-btn:hover').classList.toggle("nav-btn-darkM:hover")
}
