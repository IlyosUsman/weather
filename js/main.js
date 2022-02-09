let searchInput = document.querySelector('.search-input')
let inputList = document.querySelector('.input-ul')
let countries = document.querySelector('.countries')

function handleBtn (event){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.target.textContent}&limit=1&appid=cbe3dd267a18f6c89943b3eff94f1ed7`
    )
    .then((response) => response.json())
    .then((data) => data.forEach(value => {
        var lat = event.target.dataset.lat = value.lat
        var lon = event.target.dataset.lon = value.lon
        localStorage.setItem("let", lat);
        localStorage.setItem("lon",lon)
        window.location.pathname = "/info.html"
    }))
}

countries.addEventListener('click', handleBtn)


function handleClickButton(e){
    localStorage.setItem('let', e.target.dataset.lat)
    localStorage.setItem('lon', e.target.dataset.lon)
    window.location.pathname = "/info.html"
}

function handelInput (e) {
    inputList.innerHTML = null
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=cbe3dd267a18f6c89943b3eff94f1ed7`)
    .then(res => res.json())
    .then(data => data.forEach(element => {
        
        var creatItem = document.createElement("li")
        var creatBtn = document.createElement("button")
        
        
        creatBtn.textContent = element.name
        var btnLat = creatBtn.dataset.lat = element.lat
        var btnLon = creatBtn.dataset.lon = element.lon
        
        creatBtn.addEventListener('click', handleClickButton)

        creatItem.append(creatBtn)
        inputList.append(creatItem)        
    }))
    
}

searchInput.addEventListener('input', handelInput )






