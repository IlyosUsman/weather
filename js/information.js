let backBtn = document.querySelector('.back-button')
let text = document.querySelector('.text')
let textFirst = document.querySelector('.text-first')
let textSecond = document.querySelector('.text-second')
let textThird = document.querySelector('.text-third')
let textFourth = document.querySelector('.text-fourth')

var let = localStorage.getItem("let")
var lon = localStorage.getItem("lon")

fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${let}&lon=${lon}&appid=cbe3dd267a18f6c89943b3eff94f1ed7`
)   
.then((response) => response.json())
.then((data => {
    console.log(data);
    text.textContent = data.name
    textFirst.textContent = data.main.temp
    textSecond.textContent = data.weather[0].main
    textThird.textContent = data.wind.speed + "km/h"
    textFourth.textContent = data.wind.deg 
}))

function handleBackBtn(){

    console.log( window.location.pathname = "/index.html");

}

backBtn.addEventListener('click', handleBackBtn)