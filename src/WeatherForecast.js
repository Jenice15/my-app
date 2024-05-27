import React from 'react';
import './App.css';
import './WeatherForecast.css';
import ReactAnimatedWeather from 'react-animated-weather';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function WeatherForecast(props) {
    // if (props.weatherData) {
    function showForecast(response) {
        console.log(response.data);
    }

    let apiKey = '1ee4264117b73d2263eecd562f31ef5c';
    let units = 'metric';
    let lat = 37.773972;
    let lon = -122.431297;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);

    return (
        <div className='weather-forecast'>
            <div className='container'>
                <Card body className='forecast-card'>
                    <div className='weather-table '>
                        <div className='row'>
                            <div className='col'>
                                <div className='forecast-day'>Wed</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='CLEAR_DAY'
                                        color='orange'
                                        size='48'
                                        animate='true'
                                    />
                                </div>
                                <span className='forecast-temp-max'>
                                    20&deg;
                                </span>
                                <span className='forecast-temp-min'>
                                    10&deg;
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
    // }
}
