import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherForecastDay(props) {
    // let icon = props.data.weather[0].description;

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }
    return (
        <div className='WeatherForecastDay'>
            <div className='forecast-day'>{day()}</div>
            {/* <div className='forecast-icon'>{icon}</div> */}
            <span className='forecast-temp-max'>{maxTemperature()}</span>
            <span className='forecast-temp-min'>{minTemperature()}</span>
        </div>
    );
}
