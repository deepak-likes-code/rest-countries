import React from 'react'
import './search.css'

const Search = (props) => {


    const handleEvent = e => {
        e.preventDefault()
        props.onchange(e.target.value)

    }

    const filter = e => {
        e.preventDefault()
        props.filter(e.target.value)
    }

    return (


        <section className="filter">
            <form name='search' className="form-control" >
                <input type="search" name="search" id="search"
                    placeholder="Search for country"
                    onChange={handleEvent}
                />

            </form>

            <div>
                <select name="select" id="select" className="select" onChange={filter}>
                    <option defaultValue value="filter">Filter By</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default Search
