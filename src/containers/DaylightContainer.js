import React from 'react';
import DaylightSelector from '../components/DaylightSelector';
import DaylightDisplay from '../components/DaylightDisplay';
import CityForm from '../components/CityForm';

const DaylightContainer = () => {
<<<<<<< HEAD
    
    // const formatDate = (date) => {
    //     const yyyy = date.getFullYear();
    //     const mm = String(date.getMonth() + 1).padStart(2, '0');
    //     let dd = String(date.getDate()).padStart(2, '0');
    //     const formattedDate = `${yyyy}-${mm}-${dd}`;
    //     return formattedDate;
    // }

    // const today = formatDate(new Date());
    
    // const [daylight, setDaylight] = useState({});
    // const [day, setDay] = useState(today);
    const [lattitude, setLattitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [city, setCity] = useState({});
    const [loaded, setLoaded] = useState(false);

    // const daylightAPI = `https://api.sunrise-sunset.org/json?lat=${lattitude}&lng=${longitude}&date=${day}`
    const geocodeAPI = `https://geocode.xyz/${city}?json=1`
        
    useEffect(() => {
        getLatLong();
    }, ["data"]);
    
    // useEffect(() => {
    //     getDaylight();
    // }, [day, lattitude, longitude]);

    // const getDaylight = () => {
    //     console.log('getting daylight data');
    //     fetch(daylightAPI)
    //         .then(res => res.json())
    //         .then(json => {
    //             setDaylight(json.results)
    //         })    
    // }

    const getLatLong = () => {
        console.log('getting city');
        console.log(city)
        
        
        fetch(geocodeAPI)
            .then(res => res.json())
            .then(console.log("wow"))
            .then(json => {
                setLattitude(json.latt)
                setLongitude(json.longt)    
            })
            .then(setLoaded(true))
        
        
    }

   

    // const getTomorrow = () => {
    //     const tomorrow = new Date();
    //     tomorrow.setDate(tomorrow.getDate() + 1);
    //     setDay(formatDate(tomorrow));
    // }

    // const getYesterday = () => {
    //     const yesterday = new Date();
    //     yesterday.setDate(yesterday.getDate() - 1);
    //     setDay(formatDate(yesterday));
    // }

    // const getToday = () => {
    //     setDay(today);
    // }


    return (
        <>
            <h1>Sunrise and Sunset Information</h1>

            <CityForm onCitySubmit={(city) => setCity(city)}/>
            {/* <DaylightSelector 
                setTomorrow={() => getTomorrow()}
                setYesterday={() => getYesterday()}
                setToday={() => getToday()}
            /> */}
            <DaylightDisplay
                // daylight={daylight}
                lattitude={lattitude}
                longitude={longitude}
                loaded={loaded}
                
            />
        
=======
    return (
        <>
            <h1>Sunrise and Sunset Information</h1>
            <DaylightSelector/>
            <DaylightDisplay/>
>>>>>>> parent of 8c336ea (find sunset by long and lat)
        </>

    )
}

export default DaylightContainer;