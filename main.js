import { setInitialView, loadLastView, saveToLocalStorage } from './utils.js'

document.addEventListener('DOMContentLoaded', _ => {

    const changeLanguage = document.getElementById('changeLanguage')
    const languages = [
        {
            code: 'tr',
            language: 'Türkçe'
        },
        {
            code: 'en',
            language: 'English'
        },
        {
            code: 'fr',
            language: 'Français'
        },
    ]
    changeLanguage.innerHTML = languages.map(item => {
        return `<option value="${item.code}">${item.language}</option>`
    })
    changeLanguage.addEventListener('change', e => {
        saveToLocalStorage('prefferedLanguage', e.target.value);
        loadLastView()
    })




    const app = document.getElementById('app')
    setInitialView()
    loadLastView()
})