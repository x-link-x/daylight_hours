import React from 'react';

const DaylightSelector = ({setTomorrow, setYesterday, setToday}) => {
    return (
        <form>
            <label for="city">Enter a city </label>
            <input type="text" id="city"></input>
            <br/>
            <br/>
            <button onClick={setYesterday}>Yesterday</button>
            <button onClick={setToday}>Today</button>
            <button onClick={setTomorrow}>Tomorrow</button>
        </form>
    )
}

export default DaylightSelector;