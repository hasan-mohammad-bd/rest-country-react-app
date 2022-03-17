import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]); //1

  useEffect(() => {
    //2
    fetch("https://restcountries.com/v3.1/all") //3
      .then((res) => res.json())
      .then((data) => setCountries(data)); //4
  }, []);

  return (
    <div>
      <h1>hello from countries: {countries.length} </h1>
      {
        // countries.map(country => console.log(country))
      }
      <div className="countries-container">
        {countries.map(country => (
          <Country
            country={country}
            key={country.cca3}//a key have to use to avoid errors.
            //   name={country.name.common}
            //   population={country.population}
            //   area={country.area}
            //   region={country.region}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
