import React, { useEffect, useState } from 'react';


const Countries = () => {
    const [countries, setCountries] = useState([]);//1

    useEffect(() => { //2
        fetch("https://restcountries.com/v3.1/all")//3
        .then(res => res.json())
        .then(data => setCountries(data))//4
    },[])

    return (
        <div>
            <h1>hello from countries: {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;