export default function SearchBar({setSearch, setFilter}) {
  return (
    <div className="search-filter-container">
      <div className="search-button">
        <i className="fa-solid fa-magnifying-glass" />
        <input onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}} type="search" placeholder="Search for a country..." />
      </div>
      <div className="filter-container">
        <select onChange={(e) => {setFilter(e.target.value)}} className="filter-by-region" defaultValue="">
          <option value="" disabled hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
