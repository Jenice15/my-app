import './App.css';
import Weather from './Weather';
// import WeatherForecast from './WeatherForecast';
import Card from 'react-bootstrap/Card';

export default function App() {
    // alert('Hello');
    return (
        <div className='App'>
            <Card className='Card mx-auto'>
                <Card.Body>
                    <div className='Wrapper'>
                        <div className='container'>
                            <Weather />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <a
                className='aboutMe'
                href='https://github.com/Jenice15/react-weather-app'
            >
                Open source code by
            </a>
            <a href='https://jenicemartin.netlify.app/' className='aboutMe'>
                {' '}
                Jenice Martin
            </a>
        </div>
    );
}
