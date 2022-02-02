let weather = {
    "apiKey": "1373ce070da4b44d9dddb6b0ddc33b6b",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
            ) 
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").textContent = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").textContent = description;
    document.querySelector(".temp").textContent = temp + "°F";
    document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
    document.querySelector(".speed").textContent = "Wind speed: " + speed + "km/h";
},
search: function() {
this.fetchWeather(document.querySelector(".search-bar").value)
}
};

document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
if (event.key == "Enter") {
    weather.search();
}
});