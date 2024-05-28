import React, { useState } from 'react';
import axios from 'axios';
import WeatherData from './WeatherData';
import './Weather.css';

export default function Weather() {
    let [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    // let upperCaseCity = city.toUpperCase();

    function upadteCity(event) {
        setCity(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();

        let apiKey = 'e5ac1cb96c3cdbe89abd91f7112a7bf7';
        let units = 'metric';
        city = city.split(' ').join('+');
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(function (response) {
            setWeatherData(response.data);
        });
    }
    return (
        <div className='container'>
            <div className='Search'>
                <h1 className='heading'>Weather</h1>
                <form className='searchForm' onSubmit={handleSubmit}>
                    <input
                        type='search'
                        placeholder='Enter a city..'
                        className='searchBar'
                        onBlur={upadteCity}
                    />
                    <button className='btn button'> Search</button>
                </form>
                <h1 className='cityName'>{city}</h1>
                <WeatherData weatherData={weatherData} />
            </div>
        </div>
    );
}
