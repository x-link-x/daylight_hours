import React from 'react';
import DaylightSelector from '../components/DaylightSelector';
import DaylightDisplay from '../components/DaylightDisplay';

const DaylightContainer = () => {
    return (
        <>
            <h1>Sunrise and Sunset Information</h1>
            <DaylightSelector/>
            <DaylightDisplay/>
        </>

    )
}

export default DaylightContainer;