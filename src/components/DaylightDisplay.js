import React from 'react';

const DaylightDisplay = ({daylight}) => {
    return (
        <div>
            <p>Sunrise: {daylight.sunrise}</p>
            <p>Sunset: {daylight.sunset}</p>
        </div>
    )
}

export default DaylightDisplay;