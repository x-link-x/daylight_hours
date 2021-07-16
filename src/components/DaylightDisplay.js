import React from 'react';

<<<<<<< HEAD
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
=======
const DaylightDisplay = () => {
    return (
        <p>Details go here</p>
>>>>>>> parent of 8c336ea (find sunset by long and lat)
    )
}

export default DaylightDisplay;