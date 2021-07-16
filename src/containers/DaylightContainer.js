import React, {useState, useEffect} from 'react';
import DaylightSelector from '../components/DaylightSelector';
import DaylightDisplay from '../components/DaylightDisplay';

const DaylightContainer = () => {
    
    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        let dd = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        return formattedDate;
    }

    const today = formatDate(new Date());
    
    const [daylight, setDaylight] = useState({});
    const [day, setDay] = useState(today);
    const [lattitude, setLattitude] = useState(36.7201600);
    const [longitude, setLongitude] = useState(-4.4203400);

    useEffect(() => {
        getDaylight();
    }, [day, lattitude, longitude]);

    const getDaylight = () => {
        console.log('getting daylight data');

        fetch(`https://api.sunrise-sunset.org/json?lat=${lattitude}&lng=${longitude}&date=${day}`)
            .then(res => res.json())
            .then(json => setDaylight(json.results))
           
    }

    const getTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setDay(formatDate(tomorrow));
    }

    const getYesterday = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        setDay(formatDate(yesterday));
    }

    const getToday = () => {
        setDay(today);
    }


    return (
        <>
            <h1>Sunrise and Sunset Information</h1>
            <DaylightSelector 
                setTomorrow={() => getTomorrow()}
                setYesterday={() => getYesterday()}
                setToday={() => getToday()}
            />
            <DaylightDisplay
                daylight={daylight}
            />
        </>

    )
}

export default DaylightContainer;