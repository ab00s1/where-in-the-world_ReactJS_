import { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import "../detail.css";
import data from "../data";
import { Link, useLocation } from "react-router-dom";
import DShimmer from "./DShimmer";

export default function Detail() {
    const location = useLocation()
    const [name, setName] = useState(new URLSearchParams(location.search).get('countryName'))
    // console.log(name);
    const countries = data
    let [current, setCurrent] = useState(countries.filter((elm) => elm.name.common === name))

    useEffect(() => {
      const fetchData = async () => {
        if ((countries.filter((elm) => elm.name.common === name)).length) setCurrent(countries.filter((elm) => elm.name.common === name))
          else {
          fetch(`https://restcountries.com/v3.1/alpha/${name}`)
          .then(async (res) => {return await res.json()})
          .then((data) => setCurrent(data))
        }
      }
      fetchData();
    },[name])

    useEffect(() => {
      setName(new URLSearchParams(location.search).get('countryName'))
    },[location])

    console.log(current);
    console.log(current[0].languages);
    if (current.length === 0) return (<DShimmer/>)
    else {
    return (
      <Fragment>
      <Header />
      <main>
        <p className="back-button" onClick={() => {
          return history.back()
          }}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp;&nbsp;Back
        </p>
        <div className="country-details">
          <img src={current[0].flags.svg} alt="flag" />
          <div>
            <h1>{current[0].name.common}</h1>
            <div className="card-text">
              <p>
                <b>Native Name: </b>{Object.entries(current[0].name.nativeName || {k: {}})[0][1].common}
              </p>
              <p>
                <b>Population: </b>{current[0].population}
              </p>
              <p>
                <b>Region: </b>{current[0].region}
              </p>
              <p>
                <b>Sub Region: </b>{current[0].subregion}
              </p>
              <p>
                <b>Capital: </b>{current[0]?.capital?.join(', ') || ""}
              </p>
              <p>
                <b>Top Level Domain: </b>{current[0].tld.join(', ')}
              </p>
              <p>
                <b>Currencies: </b>{Object.entries(current[0].currencies || {k : {}})[0][1].name}
              </p>
              <p>
                <b>Languages: </b>{current[0].languages ? Object.values(current[0].languages).join(", ") : ""}
              </p>
            </div>
            <div className="border-countries">
              <p>
                <b>Border Countries: &nbsp;&nbsp;</b>
                {
                  (current[0].borders) && current[0].borders.map((borderC) => {
                    
                    return <Link key={borderC} to={`/details?countryName=${borderC}`}>{borderC}</Link>
                })
                }
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
    )
  }
}
