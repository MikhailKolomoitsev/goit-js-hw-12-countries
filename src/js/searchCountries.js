import fetchCountries from './fetchCountries'
import '@pnotify/core/dist/BrightTheme.css';
const debounce = require('lodash.debounce')
const { error } = require('@pnotify/core');

const refs = {
    inputSelector: document.querySelector('.js-input'),
    cardContainer: document.querySelector('.js-cardContainer')
}
refs.inputSelector.addEventListener('input', console.log('hello'))

// function onInputChange(e) {
//     console.log(e.currentTarget.value);
// }

