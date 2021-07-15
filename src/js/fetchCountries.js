const BASE_URL = `https://restcountries.eu/rest/v2/name/`
export default async function  fetchCountries(searchQuery) {
        const response= await fetch(`${BASE_URL}${searchQuery}`)
   return response.json()
}