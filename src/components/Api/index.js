import axios from 'axios'
import qs from 'qs'

const URL = 'https://restcountries.com/v3.1/'


export const getInitialCountries = async () => {

    const countriesToDisplay = ["usa", "ger", "uk", "in", "cn", "ch", "ca", "ru", "jp"]
    try {
        const { data } = await axios.get(`${URL}alpha`, {
            params: {
                codes: countriesToDisplay
            },
            paramsSerializer: (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            }
        })
        return data

    } catch (er) {
        console.error(er)
    }
}




export const getCountry = async (country) => {
    try {
        const { data } = await axios.get(`${URL}/name/${country}`)
        return data
    } catch (err) {
        console.error(err)
    }
}