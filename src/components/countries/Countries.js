import React from 'react'
import Country from '../country/Country'
import './countries.css'

const Countries = ({ countries }) => {

    return (

        <div className="grid">
            {countries.map((country, id) =>

                <Country country={country} key={id} />
            )}
        </div>
    )
}

export default Countries

