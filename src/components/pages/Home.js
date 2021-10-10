import { useEffect, useState } from 'react'
import Countries from '../countries/Countries'
import Search from '../search/Search'
import { getCountry, getInitialCountries } from '../Api/index'
import Country from '../country/Country'



const Home = () => {


    const [countries, setCountries] = useState([])

    useEffect(() => {
        getInitialCountries()
            .then(data => {
                console.log(data)
                setCountries(data)
            })
    }, [])




    const onchange = e => {
        getCountry(e)
            .then(data => {
                console.log(data)
                if (data) {

                    setCountries(data)
                }
            })
        console.log('from parent ', e)
    }

    const filter = e => {
        const data = countries.filter(country => country.region === e)
        setCountries(data)
    }

    return (
        <>
            <Search onchange={e => onchange(e)} filter={e => filter(e)} />
            <Countries className="countries" countries={countries} />
        </>
    )
}

export default Home
