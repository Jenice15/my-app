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
                        <div className='row-1'>
                            <div className='col-sm-3'>
                                <div className='forecast-day'>Wed</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='CLEAR_DAY'
                                        color='orange'
                                        size='60'
                                        animate='true'
                                    />
                                </div>
                                <div className='forecast-temp'>20&deg;</div>
                            </div>
                        </div>
                        <div className='row-2'>
                            <div className='col-sm-3'>
                                <div className='forecast-day'>Thu</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='RAIN'
                                        color='Blue'
                                        size='60'
                                        animate='true'
                                    />
                                </div>
                                <div className='forecast-temp'>15&deg;</div>
                            </div>
                        </div>
                        <div className='row-3'>
                            <div className='col-sm-3'>
                                <div className='forecast-day'>Fri</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='CLOUDY'
                                        color='blue'
                                        size='60'
                                        animate='true'
                                    />
                                </div>
                                <div className='forecast-temp'>18&deg;</div>
                            </div>
                        </div>

                        <div className='row-4'>
                            <div className='col-sm-3'>
                                <div className='forecast-day'>Sat</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='CLOUDY'
                                        color='blue'
                                        size='60'
                                        animate='true'
                                    />
                                </div>
                                <div className='forecast-temp'>17&deg;</div>
                            </div>
                        </div>
                        <div className='row-4'>
                            <div className='col-sm-3'>
                                <div className='forecast-day'>Sun</div>
                                <div className='forecast-icon'>
                                    <ReactAnimatedWeather
                                        className='animated-icon'
                                        icon='WIND'
                                        color='grey'
                                        size='60'
                                        animate='true'
                                    />
                                </div>
                                <div className='forecast-temp'>20&deg;</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
