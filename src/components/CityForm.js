import React, {useState} from 'react';

const CityForm = ({onCitySubmit}) => {

    const [city, setCity] = useState("");
    const handleCityChange = e => setCity(e.target.value)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const cityToSubmit = city.trim();
        if(!cityToSubmit) {
            return null;
        }

        onCitySubmit({
            city: cityToSubmit
        })

        setCity("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label for="city">Enter a city</label>
            <input type="text" id="city" value={city} onChange={handleCityChange}/>
            <input type="submit" value="Search"/>
        </form>
    )

}

export default CityForm;