import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThumbDetail from "../components/ThumbDetail";
import { BiSearch } from "react-icons/bi";

const Countries = ({ theme }) => {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [filteredCountries, setFileteredCountries] = useState(countries);

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    await setCountries(data);
  };

  const handleSearch = () => {
    setFileteredCountries(
      countries.filter((country) => {
        if (country.name.common.toLowerCase().match(text.toLocaleLowerCase())) {
          return country;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <div>
      <div className="input-holder">
        <div className={`search-icon ${theme}`}>
          <BiSearch />
        </div>
        <input
          type="text"
          value={text}
          className={`input ${theme}`}
          placeholder="Search for a country..."
          onChange={(e) => {
            setText(e.target.value);
            handleSearch();
          }}
        />
      </div>
      <div className="grid">
        {/* {countries.map((country, index) => (
          <ThumbDetail
            title={country.name.common}
            image_url={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            theme={theme}
            state={country}
            key={index}
          />
        ))} */}
        {filteredCountries.length === 0
          ? countries.map((country, index) => (
              <ThumbDetail
                title={country.name.common}
                image_url={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                theme={theme}
                state={country}
                key={index}
              />
            ))
          : filteredCountries.map((country, index) => (
              <ThumbDetail
                title={country.name.common}
                image_url={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                theme={theme}
                state={country}
                key={index}
              />
            ))}
      </div>
    </div>
  );
};

export default Countries;
