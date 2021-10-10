import { useState, useEffect } from 'react'
import { getCountry } from '../Api/index'
import { Link, useParams } from 'react-router-dom'
import './countryPage.css'

const CountryPage = () => {
    const { country } = useParams()
    const [countryData, setCountryData] = useState([])
    useEffect(() => {
        getCountry(country)
            .then(
                data => {
                    console.log(data)
                    setCountryData(data)
                }
            )
    }, [])


    return (
        <div className="container">
            <Link to="/"><i className="fas fa-arrow-left" />Go Back</Link>
            <div className="countryDetails">
                {countryData.map(c => {
                    const { name, population, capital, region, subregion, tld, languages, flags, currencies } = c
                    return (
                        <>
                            <div className="flag">
                                <img src={flags.png} alt="flag" />
                            </div>
                            <div className="details">
                                <div className="detail">
                                    <h1>{country}</h1>
                                    <p>Native Name: {name.common}</p>
                                    <p>Population: {population}</p>
                                    <p>Region : {region}</p>
                                    <p>Sub Region: {subregion}</p>
                                    <p>Capital: {capital}</p>
                                    <p>Top Level Domain: {tld}</p>
                                    <p>Languages: {Object.values(languages).join(',')}</p>
                                    <p>Currencies: {Object.keys(currencies)}</p>
                                </div>
                            </div>
                        </>
                    )


                })}


            </div>

        </div>

    )
}

export default CountryPage
