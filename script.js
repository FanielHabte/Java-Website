
document.addEventListener("DOMContentLoaded", () => {

    const apikey = "c3efe5bf01d1db430b68e994ee8f395d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
    const searchBox = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".fa-solid.fa-magnifying-glass.fa-xl");
    



    async function checkWeather(city){
        const response = await fetch(apiUrl + city +`&appid=${apikey}`);
        var data = await response.json();
        document.querySelector(".city").innerHTML= data.name;
        var temprature = document.querySelector(".temprature").innerHTML= Math.round(data.main.temp)+ " °F";
        document.querySelector(".h-data").innerHTML= data.main.humidity +"%";
        document.querySelector(".w-data").innerHTML= data.wind.speed + " mi/hr"
    ;
        document.querySelector(".condition").innerHTML= data.weather[0].description
        console.log(data);
         if (data.weather[0].main == "Clear") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-regular fa-sun"></i>`

            } else if (data.weather[0].main == "Clouds") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-solid fa-cloud"></i>`
                
            }
            else if (data.weather[0].main == "Rain") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`
                
            }
            else if (data.weather[0].main == "Thunderstorm") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`
                
            }
            else if (data.weather[0].main == "Snow") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-regular fa-snowflake"></i>`
                
            }
            else if (data.weather[0].main == "Fog") {

            document.querySelector(".condition-pic").innerHTML = `<i class="fa-solid fa-smog"></i>`
                
            }
    }

    searchBtn.addEventListener("click", ()=>{ checkWeather(searchBox.value);
           
    })











});
