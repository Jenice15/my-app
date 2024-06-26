import React, { useState } from 'react';

export default function TemperatureUnits(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheitTemp(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function showCelsiusTemp(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 12;
    }
    if (unit === 'celsius') {
        return (
            <div className='temperatureUnits'>
                <span className='temperature'>{Math.round(props.celsius)}</span>
                <span className='units'>
                    &deg;C |{' '}
                    <a href='/' onClick={showFahrenheitTemp}>
                        &deg;F
                    </a>
                </span>
            </div>
        );
    } else {
        return (
            <div className='temperatureUnits'>
                <span className='temperature'>{Math.round(fahrenheit())}</span>
                <span className='units'>
                    <a href='/' onClick={showCelsiusTemp}>
                        &deg;C |
                    </a>
                    &deg;F
                </span>
            </div>
        );
    }
}
