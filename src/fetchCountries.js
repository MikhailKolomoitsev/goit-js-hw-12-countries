// export default function fetchCountries(searchQuery) {
//     return new Promise 
// }
fetch('https://restcountries.eu/rest/v2/name/ukraine?fullText=true')
    .then(response => {
    return response.json()
    })
    .then(result => { console.log(result); })
    .catch(error=>{console.log(error);})