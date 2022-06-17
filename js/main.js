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
    document.querySelector('body').classList.toggle("body-darkM")
    document.querySelector('.github').classList.toggle("github-darkM")
    
    document.querySelector('.theme').classList.toggle('theme-rotate')

    document.querySelector('.menu').classList.toggle('menu-darkM')
   
    document.querySelector('.nav-btn:hover').classList.toggle("nav-btn-darkM:hover")
}
