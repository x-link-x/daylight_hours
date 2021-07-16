import React from 'react';

// const DaylightDisplay = ({daylight}) => {
const DaylightDisplay = ({lattitude, longitude, loaded}) => {
    
    if (!loaded) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {/* <p>Sunrise: {daylight.sunrise}</p>
            <p>Sunset: {daylight.sunset}</p> */}

            <p>Lat:{lattitude}</p>
            <p>Long:{longitude}</p>
        </div>
    )
}

export default DaylightDisplay;