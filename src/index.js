import './sass/main.scss';
import { fetchCountries } from './fetchCountries.js'

const debounce = require('lodash.debounce')
const { error } = require('@pnotify/core');

const inputSelector = document.querySelector('#input')
// inputSelector.addEventListener('input', debounce(fetchCountries(inputSelector.value), 1000))
console.log( error({text: 'Not matches found!',}))




