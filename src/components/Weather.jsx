import React from 'react'
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
  return (
    <div className='weather'>
        <div className='searchbar'>
            <input type="text" placeholder='Search...' />
            <img src={searchIcon} alt="Search" />
        </div>
            <img src={sun} alt="sun" />
            <p className='temp'>22°C</p>
            <p className='city'>TUNIS</p>
            <div className='weatherDetails'>
                <div className='col'>
                  <img src={humidity} alt="humidity" />
                  <div>
                  <p>50%</p>
                  <span>Humidity</span>
                  </div>
                </div>
                <div className='col'>
                  <img src={wind} alt="wind" />
                  <div>
                  <p>5km/h</p>
                  <span>Wind</span>
                  </div>
                </div>
            </div>  
    </div>
  )
}

export default Weather
