import React from 'react';

const DaylightDisplay = ({daylight}) => {
    return (
        <>
        <p>Sunrise: {daylight.sunrise}</p>
        <p>Sunset: {daylight.sunset}</p>
        </>
    )
}

export default DaylightDisplay;