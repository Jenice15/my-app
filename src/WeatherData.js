import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './WeatherData.css';
import FormattedDate from './FormattedDate';
import TemperatureUnits from './TemperatureUnits';
import WeatherForecast from './WeatherForecast';
// import WeatherIcon from './WeatherIcon';

export default function WeatherData(props) {
    if (props.weatherData) {
        const coordinates = props.weatherData.coord;
        const temperature = props.weatherData.main.temp;
        const description = props.weatherData.weather[0].description;
        const humidity = props.weatherData.main.humidity;
        const wind = props.weatherData.wind.speed;
        const icon = `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;
        console.log(icon);
        const date = new Date(props.weatherData.dt * 1000);

        return (
            <div className='weatherData'>
                <Card className='summaryTempCard'>
                    <Card.Body>
                        <div className='summaryTempData'>
                            <FormattedDate date={date} />
                            <img src={icon} />
                            <div className='temp'>
                                <span className='tempUnits'>
                                    <TemperatureUnits celsius={temperature} />
                                </span>
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
                <WeatherForecast coordinates={coordinates} />
            </div>
        );
    }
}
