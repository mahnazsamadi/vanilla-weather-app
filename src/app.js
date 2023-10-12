function displayTemperature(response){
    console.log(response.data);
 let temperatureElement = document.querySelector("#temperature");
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 temperatureElement.innerHTML = Math.round(response.data.temperature.current);
 cityElement.innerHTML = response.data.city;
 descriptionElement.innerHTML = response.data.condition.description;
 humidityElement.innerHTML = response.data.temperature.humidity;
 windElement.innerHTML = Math.round(response.data.wind.speed);

 
}

let apiKey ="t7113dcd2b4o0287f92fb9d37ed9b76a";
let apiUrl ="https://api.shecodes.io/weather/v1/current?query=London&key=t7113dcd2b4o0287f92fb9d37ed9b76a&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);