import React, { useState } from 'react';
import './App.css';
import './WeatherForecast.css';

import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function showForecast(response) {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className='weather-forecast'>
                <div className='container'>
                    <Card body className='forecast-card'>
                        <div className='weather-table '>
                            <div className='row'>
                                {forecast.map(function (dailyForecast, index) {
                                    if (index < 6) {
                                        return (
                                            <div className='col'>
                                                <WeatherForecastDay
                                                    data={dailyForecast}
                                                />
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    } else {
        let apiKey = 'fa90t5bf5523344e459f280fabbb9o83';
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecast);
        console.log(apiUrl);

        return null;
    }
}
