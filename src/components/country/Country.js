
import './country.css'
import { Link } from 'react-router-dom'


const Country = ({ country }) => {


    return (
        <div className="card">




            <div className="image">
                <img src={country.flags.svg} alt="flag" className="flag" />
            </div>
            <div className="info">
                <h4>{country.name.common}</h4>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <Link to={`/country/${country.name.common}`} className="btn-learn" >Learn More</Link>

            </div>






        </div>
    )
}

export default Country
