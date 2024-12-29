import data from "../data"
import CountryCard from "./CountryCard"
import "../App.css"
import CShimmer from "./CShimmer"

const country = data.map((elm) => <CountryCard key={elm.name.common} name={elm.name.common} flag={elm.flags.svg} pop={elm.population} reg={elm.region} cap={elm.capital}/>)

export default function CountriesContainer({search, filter}) {
  if (country.length === 0) return <CShimmer/>
  if (filter) {
    return (
      <div className="countries-container">
        {country.filter((elm) => {return elm.props.reg===filter && elm.props.name.toLocaleLowerCase().includes(search);})}
    </div>
  )
  } else {
    return (
      <div className="countries-container">
        {country.filter((elm) => {return elm.props.name.toLocaleLowerCase().includes(search);})}
    </div>
  )
  }
}
