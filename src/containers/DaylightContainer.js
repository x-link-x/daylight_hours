import React, {useState, useEffect} from 'react';
import DaylightSelector from '../components/DaylightSelector';
import DaylightDisplay from '../components/DaylightDisplay';
// import CityForm from '../components/CityForm';

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
    const [latitude, setLatitude] = useState(55.85079);
    const [longitude, setLongitude] = useState(-4.24387);
    // const [city, setCity] = useState({});
   

    const daylightAPI = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${day}`
    // const geocodeAPI = `https://geocode.xyz/${city}?json=1`
        
    // useEffect(() => {
    //     getLatLong();
    // }, []);
    
    useEffect(() => {
        getDaylight();
    }, [day, latitude, longitude]);

    const getDaylight = () => {
        console.log('getting daylight data');
        fetch(daylightAPI)
            .then(res => res.json())
            .then(json => {
                setDaylight(json.results)
            })    
    }

    // const getLatLong = () => {
    //     console.log('getting city'); 
    //     fetch(geocodeAPI)
    //         .then(res => res.json())
    //         .then(json => {
    //             setLattitude(json.lat)
    //             setLongitude(json.longt)    
    //         })
    // }

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
            <h1>Sunrise and Sunset Information for Glasgow</h1>

            {/* <CityForm onCitySubmit={(city) => setCity(city)}/> */}
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