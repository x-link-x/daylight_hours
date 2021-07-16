import React from 'react';

const DaylightSelector = ({setTomorrow, setYesterday, setToday}) => {
    
    
    return (
        <>
            <button onClick={setYesterday}>Yesterday</button>
            <button onClick={setToday}>Today</button>
            <button onClick={setTomorrow}>Tomorrow</button>
        </>
    )
}

export default DaylightSelector;