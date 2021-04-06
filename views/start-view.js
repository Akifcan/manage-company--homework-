import { saveToLocalStorage, render } from '../utils.js'
import introduceView from './introduce-view.js'

const startView = {
    name: 'startView',
    render: () => {
        return `
            <div class="container start">
                <ion-icon name="business-outline" size="large"></ion-icon>
                <h1 class="app-logo">Manage Company</h1>
                <p>Choose Your Language Before The Start</p>
                <div class="flags">
                    <img data-language="en" class="flag" title="English" src="./images/flags/english.png" alt="english flag" />
                    <img data-language="tr" class="flag" title="Türkçe" src="./images/flags/turkey.png" alt="turkish flag" />
                    <img data-language="fr" class="flag" title="Français" src="./images/flags/french.png" alt="french flag" />
                </div>
            </div>
        `
    },
    after_render: () => {
        const flags = document.querySelectorAll('.flag')
        flags.forEach(flag => {
            flag.addEventListener('click', e => {
                const preferredLanguage = e.target.dataset.language
                saveToLocalStorage('prefferedLanguage', preferredLanguage)
                render(introduceView)
            })
        })
    }
}

export default startView