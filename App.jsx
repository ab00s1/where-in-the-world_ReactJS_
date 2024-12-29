import { Fragment, useState } from "react";
import Header from "./components/Header";
import "./App.css"
import SearchFilterBar from "./components/SearchFilterBar";
import CountriesContainer from "./components/CountriesContainer";

const App = () => {
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState('')
    return (
        <Fragment>
            <Header/>
            <main>
                <SearchFilterBar setSearch={setSearch} setFilter={setFilter}/>
                <CountriesContainer search={search} filter={filter}/>
            </main>
        </Fragment>
    )
}

export default App;