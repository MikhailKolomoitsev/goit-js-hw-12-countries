import './sass/main.scss';
import { fetchCountries } from './fetchCountries.js'
const debounce=require('lodash.debounce')
const input = document.querySelector('#input')

input.addEventListener('input', debounce(() => { console.log(input.value) }, 1000))

