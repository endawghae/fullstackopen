import { useState, useEffect } from "react"
import backendManager from "./services/backendManager"

const CountryList = ({ countryList, setCountries }) => {
    const showCountry = (event, i) => {
        event.preventDefault()
        let newCountry = countryList[i].name.common
        setCountries(newCountry)
    }

    if (countryList.length === 1) {
        return (
            <div>
                <h1>
                    {countryList[0].name.common}
                </h1>
                <ul>
                    <li key={0}> capital: {countryList[0].capital} </li>
                    <li key={1}> area: {countryList[0].area} </li>
                </ul>
                <h3>
                    languages
                </h3>
                <ul>
                    {Object.values(countryList[0].languages).map((item, i) => <li key={i}> {item} </li>)}
                </ul>
                <img src={countryList[0].flags.png} alt={`flag of ${countryList[0].name.common}`} />
            </div>
        )
    }
    if (countryList.length > 10) return (<p>Too many matches, specify another filter</p>)
    return (
        <ul>
            {countryList.map((item, i) => (<li key={i}> {item.name.common} <button name="show" onClick={(event) => { showCountry(event, i) }} /> </li>))}
        </ul>
    )
}

const App = () => {
    const [country, setCountries] = useState("")
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        backendManager.getAll("https://studies.cs.helsinki.fi/restcountries/api/all").then(returnedData => {
            let newCountryList = returnedData.filter(item => item.name.common.toLowerCase().includes(country.toLowerCase()))
            setCountryList(newCountryList)
            }).catch(error => {
                alert("an error ocurred communicating with server")
            })
    }, [country])

    const handleOnCountryChange = (event) => {
        let newCountry = event.target.value
        setCountries(newCountry)
    }

    return (
        <form>
            <div>
                country: <input value={country} onChange={handleOnCountryChange} />
            </div>
            <div>
                <CountryList countryList={countryList} setCountries={setCountries} />
            </div>
        </form>
    )
}

export default App
