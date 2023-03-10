import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Details = ({ theme }) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [name]);

  return (
    <div>
      <Link to={"/"} className={`bck-btn ${theme}`}>
        <BsArrowLeft />
        Back
      </Link>
      {country.map((item) => (
        <div className="det-container" key={item.population}>
          <div className="img-holder">
            <img src={item.flags.svg} className="det-img" />
          </div>
          <div className="params">
            <h1>{item.name.common}</h1>
            <div className="details">
              <div>
                Population: <span>{item.population.toLocaleString()}</span>
              </div>
              <div>
                Region: <span>{item.region}</span>
              </div>
              <div>
                Sub Region: <span>{item.subregion}</span>
              </div>
              <div>
                Capital: <span>{item.capital[0]}</span>
              </div>
            </div>
            {item.borders && (
              <>
                <span className="border">Border Countries:</span>
                {item.borders.map((border, index) => (
                  <button key={index} className={`borders ${theme}`}>
                    {border}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;

// [
//   {
//     name: {
//       common: "Peru",
//       official: "Republic of Peru",
//       nativeName: {
//         aym: { official: "Piruw Suyu", common: "Piruw" },
//         que: { official: "Piruw Ripuwlika", common: "Piruw" },
//         spa: { official: "Rep??blica del Per??", common: "Per??" },
//       },
//     },
//     tld: [".pe"],
//     cca2: "PE",
//     ccn3: "604",
//     cca3: "PER",
//     cioc: "PER",
//     independent: true,
//     status: "officially-assigned",
//     unMember: true,
//     currencies: { PEN: { name: "Peruvian sol", symbol: "S/ " } },
//     idd: { root: "+5", suffixes: ["1"] },
//     capital: ["Lima"],
//     altSpellings: ["PE", "Republic of Peru", "Rep??blica del Per??"],
//     region: "Americas",
//     subregion: "South America",
//     languages: { aym: "Aymara", que: "Quechua", spa: "Spanish" },
//     translations: {
//       ara: { official: "?????????????? ????????", common: "????????" },
//       bre: { official: "Republik Perou", common: "Perou" },
//       ces: { official: "Peru??nsk?? republika", common: "Peru" },
//       cym: { official: "Republic of Peru", common: "Peru" },
//       deu: { official: "Republik Peru", common: "Peru" },
//       est: { official: "Peruu Vabariik", common: "Peruu" },
//       fin: { official: "Perun tasavalta", common: "Peru" },
//       fra: { official: "R??publique du P??rou", common: "P??rou" },
//       hrv: { official: "Republika Peru", common: "Peru" },
//       hun: { official: "Perui K??zt??rsas??g", common: "Peru" },
//       ita: { official: "Repubblica del Per??", common: "Per??" },
//       jpn: { official: "??????????????????", common: "?????????" },
//       kor: { official: "?????? ?????????", common: "??????" },
//       nld: { official: "Republiek Peru", common: "Peru" },
//       per: { official: "???????????? ??????", common: "??????" },
//       pol: { official: "Republika Peru", common: "Peru" },
//       por: { official: "Rep??blica do Peru", common: "Per??" },
//       rus: { official: "???????????????????? ????????", common: "????????" },
//       slk: { official: "Peru??nska republika", common: "Peru" },
//       spa: { official: "Rep??blica de Per??", common: "Per??" },
//       srp: { official: "?????????????????? ????????", common: "????????" },
//       swe: { official: "Republiken Peru", common: "Peru" },
//       tur: { official: "Peru Cumhuriyeti", common: "Peru" },
//       urd: { official: "?????????????? ????????", common: "????????" },
//       zho: { official: "???????????????", common: "??????" },
//     },
//     latlng: [-10.0, -76.0],
//     landlocked: false,
//     borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
//     area: 1285216.0,
//     demonyms: {
//       eng: { f: "Peruvian", m: "Peruvian" },
//       fra: { f: "P??ruvienne", m: "P??ruvien" },
//     },
//     flag: "\uD83C\uDDF5\uD83C\uDDEA",
//     maps: {
//       googleMaps: "https://goo.gl/maps/uDWEUaXNcZTng1fP6",
//       openStreetMaps: "https://www.openstreetmap.org/relation/288247",
//     },
//     population: 32971846,
//     gini: { 2019: 41.5 },
//     fifa: "PER",
//     car: { signs: ["PE"], side: "right" },
//     timezones: ["UTC-05:00"],
//     continents: ["South America"],
//     flags: {
//       png: "https://flagcdn.com/w320/pe.png",
//       svg: "https://flagcdn.com/pe.svg",
//       alt: "The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.",
//     },
//     coatOfArms: {
//       png: "https://mainfacts.com/media/images/coats_of_arms/pe.png",
//       svg: "https://mainfacts.com/media/images/coats_of_arms/pe.svg",
//     },
//     startOfWeek: "monday",
//     capitalInfo: { latlng: [-12.05, -77.05] },
//     postalCode: { format: "#####", regex: "^(\\d{5})$" },
//   },
// ];
