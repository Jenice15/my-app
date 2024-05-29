import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
    // let iconUrl = `https://openweathermap.org/img/wn/${props.data.condition.icon}@2x.png`;
    // console.log(iconUrl);

    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        console.log(date);
        let day = date.getDay();

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }
    return (
        <div className='WeatherForecastDay'>
            <div className='forecastDay'>{day()}</div>
            {/* <div>{iconUrl}</div> */}
            <WeatherIcon code={props.data.condition.icon} size={36} />
            {/* <img src=`https://openweathermap.org/img/wn/${10d}@2x.png`/> */}
            {/* <div className='forecast-icon'>{icon}</div> */}
            <div className='WeatherForecastTemperatures'>
                <span className='forecast-temp-max'>{maxTemperature()}</span>
                <span className='forecast-temp-min'>{minTemperature()}</span>
            </div>
        </div>
    );
}
