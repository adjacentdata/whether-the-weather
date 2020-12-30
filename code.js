function searchfinder(event){
    if(event.keyCode == 13){
        searchResults(search.value);
    }
}

const search = document.querySelector('input');
search.addEventListener('keypress', searchfinder);

function searchResults(searchedCity){
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${searchedCity}&appid={"Your API Key here"}`)
    .then(weatherData => {
        return weatherData.json()
    }).then(finalResults(weatherData));
}

function finalResults(weatherData){;
    var searchedCity = document.querySelector('.city');
    searchedCity.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    let temperature = document.querySelector('.temperature');
    temperature.innerHTML = `<h3>${Math.ceil(weatherData.main.temp)}<span>°C </span></h3>`
    let weatherMain = document.querySelector('.precip');
    weatherMain.innerText = `${weatherData.weather[0].description}`
    let lowestHighestToday = document.querySelector('low-high');
    lowestHighestToday.innerText = `${weatherData.main.temp_min}°C / ${weatherData.main.temp_max}`
}


