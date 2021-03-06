import fetchCountries from './fetchCountries'
import '@pnotify/core/dist/BrightTheme.css';
import countryCardTemplate from '../temp/countryCard.hbs'
import listOfCountries from '../temp/listOfCountries.hbs'
const debounce = require('lodash.debounce')
const { error } = require('@pnotify/core');
// import RENDER from './renderApp' //need to askMentor

const inputSelector = document.querySelector('.js-input');
const cardContainer = document.querySelector('.js-cardContainer');

inputSelector.addEventListener('input', debounce(onInput, 500))
inputSelector.addEventListener('click', inputClickCleaner)
cardContainer.addEventListener('click', clickOnCountry)

function inputClickCleaner() {
    inputSelector.value = '';
    cardContainer.innerHTML = '';
}

function clickOnCountry(e) {
    if (e.target.classList.contains('js-countries-list_el')) {
        inputSelector.value = e.target.textContent
        cardContainer.innerHTML = '';
        onInput()
    }
}

async function onInput() {
    if (inputSelector.value.trim()) {
       const data=await fetchCountries(inputSelector.value)
          
                if (data.length === 1) {
                    renderCard(data)
                }
                else if (data.length > 1 && data.length < 10) {
                   renderList(data)
                }
               else if (data.length >= 10) {
                    error({ text: 'To many matches found. Please enter a more specific query!' })
                }
               else if (data.status === 404) {
                    error({ text: 'No matches found' })     
            }
        return
        }
    else {
         cardContainer.innerHTML=''
    }
}



function renderCard(countryData) {
    let markUp = countryCardTemplate(countryData)
    cardContainer.innerHTML=markUp
}
function renderList(array) {
    let markUpList = listOfCountries(array)
    cardContainer.innerHTML=markUpList
}

