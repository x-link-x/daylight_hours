import React, {useState, useEffect} from 'react';
import DaylightSelector from '../components/DaylightSelector';
import DaylightDisplay from '../components/DaylightDisplay';
import CityForm from '../components/CityForm';

const DaylightContainer = () => {
    
    const daylightAPI = () => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${lattitude}&lng=${longitude}&date=${day}`)
            .then(res => res.json())
            .then(json => setDaylight(json.results))
    }

    const geocodeAPI = () => {
        fetch(`https://geocode.xyz/${city}?json=1`)
            .then(res => res.json())
            .then(json => {
                setLattitude(json.latt)
                setLongitude(json.longt)
            })
    }
 
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
    const [lattitude, setLattitude] = useState(0.0293);
    const [longitude, setLongitude] = useState(-4.456);

    useEffect(() => {
        getDaylight();
    }, [day, lattitude, longitude]);

    const getDaylight = () => {
        console.log('getting daylight data');
        daylightAPI();     
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
            <CityForm/>
            <DaylightSelector 
                setTomorrow={() => getTomorrow()}
                setYesterday={() => getYesterday()}
                setToday={() => getToday()}
                // onCitySubmit={}
            />
            <DaylightDisplay
                daylight={daylight}
            />
        </>

    )
}

export default DaylightContainer;