import { Link } from "react-router-dom";

export default function CountryCard({name, flag, pop, reg, cap}) {

    // const country = data.map((elm) => elm)
    // console.log(cap?.join());

  return (
    <Link className="country-card" to={`details?countryName=${name}`}>
      <img src={flag} alt="flag" />
      <div>
        <h3>{name}</h3>
        <p>
          <b>Population: </b>{pop.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{reg}
        </p>
        <p>
          <b>Capital: </b>{cap?.join()}
        </p>
      </div>
    </Link>
  );
}
