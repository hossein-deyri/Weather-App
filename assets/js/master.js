weather("tabriz")
function get_city() {
    let city = document.querySelector('.inp_location').value
    weather(city)
}

function weather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            if (val.cod == '404') {
                city = 'german'
                weather()
                document.querySelector('.inp_location').value = " "
            }
            document.getElementsByClassName('img_description')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree')[0].innerHTML = val.main.temp
            document.getElementsByClassName('location')[0].innerHTML = val.name
            document.getElementsByClassName('date')[0].innerHTML = new Date().toDateString()
            document.getElementsByClassName('description')[0].innerHTML = val.weather[0].main
            document.getElementsByClassName('hours')[0].innerHTML = new Date().getHours()
            document.getElementsByClassName('minutes')[0].innerHTML = new Date().getMinutes()
            document.getElementsByClassName('humidity')[0].innerHTML = val.main.humidity + '%'
            document.getElementsByClassName('wind')[0].innerHTML = val.wind.speed + ' mph'
            document.getElementsByClassName('pressure')[0].innerHTML = val.main.pressure + ' Psi'
            document.getElementsByClassName('temp_min')[0].innerHTML = val.main.temp_min + '°'
            document.getElementsByClassName('temp_max')[0].innerHTML = val.main.temp_max + '°'
        })
}
//-------------------------------- Finish Fetch Main -------------------------------------

london()
function london() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('img_london')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree_london')[0].innerHTML = val.main.temp
        })
}
moscow()
function moscow() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('img_moscow')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree_moscow')[0].innerHTML = val.main.temp
        })
}
tokyo()
function tokyo() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('img_tokyo')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree_tokyo')[0].innerHTML = val.main.temp
        })
}
newyork()
function newyork() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('img_newyork')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree_newyork')[0].innerHTML = val.main.temp
        })
}
bern()
function bern() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bern&units=metric&name=hossein-deyri&appid=dba5e7bb5efe3fe690cf095591ab51c9')
        .then(res => res.json())
        .then(val => {
            document.getElementsByClassName('img_bern')[0].setAttribute('src', `assets/img/${val.weather[0].main}.png`)
            document.getElementsByClassName('degree_bern')[0].innerHTML = val.main.temp
        })
}

let dark_mode = document.getElementsByClassName('dark_mode')[0]
dark_mode.addEventListener('click', (e) => {
    console.log(dark_mode.children[0]);
    let status = dark_mode.getAttribute('data-status')
    let other_location = document.querySelectorAll('.other_location')
    let highlights = document.querySelectorAll('.highlights')
    let setting = document.querySelectorAll('.setting_part>a')
    if (status == "off") {
        dark_mode.children[0].style.display = "none"
        dark_mode.children[1].style.display = "flex"
        dark_mode.setAttribute('data-status', 'on')
        document.getElementsByTagName('main')[0].style.background = '#121212'
        document.getElementsByTagName('main')[0].style.color = '#ffffff'
        document.getElementsByClassName('location_description')[0].style.background = '#161616'
        document.getElementsByClassName('Fahrenheit')[0].style.background = '#161616'
        document.getElementsByClassName('inp_location')[0].style.background = '#121212'
        document.getElementsByClassName('inp_location')[0].style.background = '#121212'
        document.getElementsByClassName('setting_part')[0].style.background = '#161616'
        setting.forEach((val) => {
            val.style.background = '#161616'
            val.addEventListener('mouseenter', () => {
                val.style.background = "#121212"
            })
            val.addEventListener('mouseleave', () => {
                val.style.background = "#161616"
            })
        })
        other_location.forEach((val) => {
            val.style.background = '#161616'
        })
        highlights.forEach((val) => {
            val.style.background = '#161616'
        })
    } else {
        dark_mode.children[0].style.display = "flex"
        dark_mode.children[1].style.display = "none"
        dark_mode.setAttribute('data-status', 'off')
        document.getElementsByTagName('main')[0].style.background = '#F3F4F6'
        document.getElementsByTagName('main')[0].style.color = '#000000'
        document.getElementsByClassName('location_description')[0].style.background = '#FCFCFC'
        document.getElementsByClassName('Fahrenheit')[0].style.background = '#FCFCFC'
        document.getElementsByClassName('inp_location')[0].style.background = '#F3F4F6'
        document.getElementsByClassName('setting_part')[0].style.background = '#FCFCFC'
        setting.forEach((val) => {
            val.style.background = '#ffffff'
            val.addEventListener('mouseenter', () => {
                val.style.background = "#F3F4F6"
            })
            val.addEventListener('mouseleave', () => {
                val.style.background = "#FCFCFC"
            })
        })
        other_location.forEach((val) => {
            val.style.background = '#FCFCFC'
        })
        highlights.forEach((val) => {
            val.style.background = '#FCFCFC'
        })
    }
})
//-------------------------- Finish Dark Mode ------------------------------------

let setting = document.getElementsByClassName('setting')[0]
setting.addEventListener('click', () => {
    let data_setting = setting.getAttribute('data-setting')
    if (data_setting == "off") {

        setting.children[1].style.display = 'flex'
        setting.setAttribute('data-setting', 'on')
    } else {
        setting.children[1].style.display = 'none'
        setting.setAttribute('data-setting', 'off')
    }

})
//-------------------------- Finish Setting ------------------------------------



