function searchfinder(event){
    if(event.keyCode == 13){
        console.log(search.value)
    }
}

function result(returnedCity){
    fetch(`${weatherAPI.baseurl}`)
}

const search = document.querySelector('input');
search.addEventListener('keypress', searchfinder);

function searchResults(searchedCity){
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${searchedCity}&appid={"Your API Key here"}`)
    .then(weatherData => {
        return weatherData.json()
    }).then(finalResults);
}


