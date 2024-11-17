import React, { useEffect, useState } from 'react'
import "./Weather.css"
import searchIcon from "../assets/search.png"
import clouds from "../assets/clouds.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import rainyDay from "../assets/rainy-day.png"
import snow from "../assets/snow.png"
import sun from "../assets/sun.png"
import wind from "../assets/wind.png"
const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    const allIcons = {
        "01d": sun,
        "01n": sun,
        "02d":clouds,
        "02n": clouds,
        "03d": clouds,
        "03n": clouds,
        "04d": clouds,
        "04n": clouds,
        "09d": rain,
        "09n": rain,
        "10d": rainyDay,
        "10n": rainyDay,
        "13d": snow,
        "13n": snow

    }
   
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon]|| allIcons["01d"];
            setWeatherData({
                temp: Math.floor(data.main.temp),
                city: data.name,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                icon: icon
            })
        } catch (error) { 
            console.log(error);
        }
    }
    useEffect(() => {
        search("New York");
    }, [])
  return (
    <div className='weather'>
        <div className='searchbar'>
            <input type="text" placeholder='Search...' />
            <img src={searchIcon} alt="" />
        </div>
            <img src={weatherData.icon} alt="sun" />
            <p className='temp'>{weatherData.temp}°C</p>
            <p className='city'>{weatherData.city}</p>
            <div className='weatherDetails'>
                <div className='col'>
                  <img src={humidity} alt="humidity" />
                  <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                  </div>
                </div>
                <div className='col'>
                  <img src={wind} alt="wind" />
                  <div>
                  <p>{weatherData.wind}km/h</p>
                  <span>Wind</span>
                  </div>
                </div>
            </div>  
    </div>
  )
}

export default Weather
