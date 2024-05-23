import React from 'react';
import './App.css';
import './WeatherForecast.css';
import ReactAnimatedWeather from 'react-animated-weather';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

export default function WeatherForecast() {
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
}
