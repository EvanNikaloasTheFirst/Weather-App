// ()=>    <- when page loads ('load') everything inside this function runs
// window.addEventListener('load',()=> {

// });

let weather = {
// https://openweathermap.org/ <- api used
    
    // insert APIKEY below
    "apiKey": "*******************",
    //  creating a function called fetch weather
    fetchWeather:function(city)
{
    // fetch is used to return a resource (get information)
    // the url includes a dynamic query which will respond to the users input
    // when the response is generated it passes it the displayWeather function which displays the data
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
},

    // creating a function which will display the weather
    displayWeather:function(data)
    {

        // extracts the {info} from the JSON file
        const {name} = data;

        const {description} = data.weather[0];
        // data.main is the area which is being accessed.
        const {temp,humidity} = data.main;

        const {speed} = data.wind;
        
        const {feels_like} = data.main;

        
        // console.log( "name:" + name ,+ "decription:" + description, "temp:" + temp, "humidity:" + humidity,"speed:"+ speed, "feels like " + feels_like);

        // transfers the data from JSON Into elements within the HTML page

        var city = document.getElementById("place").innerHTML = "Weather in " + name;
    

        var temperature = document.getElementById("temp").innerHTML = temp + "°C" ;

        var temperatureDescription = document.getElementById("temp-description").innerHTML = "Weather:" + description;
        

        var Humidity = document.getElementById("humidity").innerHTML = "Humidity: " + humidity;

        var itFeelsLike = document.getElementById("feelsLike").innerHTML = "Feels like:" + feels_like  + "°C"

        var windSpeed = document.getElementById("Speed").innerHTML = "Speed:" + speed;

       
       
},
// obtains the text within the textbox
search: function(){
this.fetchWeather(document.querySelector(".userCity").value);
}
}

// when the textbox is clicked
document.querySelector(".search button").addEventListener("click",function(){
    // obtains the content of the search value and searches for it
    weather.search();

})