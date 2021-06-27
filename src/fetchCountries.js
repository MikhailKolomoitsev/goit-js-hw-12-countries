const BASE_URL = 'https://restcountries.eu/rest/v2/name/'
export default function fetchCountries(searchQuery) {
    fetch(`${BASE_URL}${searchQuery}`)
    .then(response => {return response.json()})
    .then(data => { console.log(data); })
    .catch(error=>{console.log(error);})}
