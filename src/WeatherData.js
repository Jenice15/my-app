import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './WeatherData.css';
import FormattedDate from './FormattedDate';

export default function WeatherData(props) {
    if (props.weatherData) {
        const temperature = props.weatherData.main.temp;
        const description = props.weatherData.weather[0].description;
        const humidity = props.weatherData.main.humidity;
        const wind = props.weatherData.wind.speed;
        const icon = `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;
        const date = new Date(props.weatherData.dt * 1000);

        return (
            <div className='weatherData'>
                <Card className='summaryTempCard'>
                    <Card.Body>
                        <div className='summaryTempData'>
                            <FormattedDate date={date} />
                            <img src={icon} alt={description} />
                            <div className='temp'>
                                {Math.round(temperature)}
                                <span className='units'>&deg;C/&deg;F</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='summaryDataCard'>
                    <Card.Body>
                        <ul className='summaryData'>
                            <li>{description}</li>
                            <li>Humidity: {humidity}%</li>
                            <li>Wind: {Math.round(wind)}km/h</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}