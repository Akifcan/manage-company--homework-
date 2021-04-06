import { saveToLocalStorage, getTextsByLangauge, render } from '../utils.js'
import gameView from './game-view.js'
import GameView from './game-view.js'

const introduceView = {
    name: 'introduceView',
    render: () => {
        return `
        <div class='container'>
                <div class='wizard one'>
                    <h1 data-text="welcome"></h1>
                    <p data-text="paragraph1">
                    </p>
                    <p data-text="paragraph2">
                    </p>
                    <button data-text="buttonOk" id="next"></button>
                </div>
                <div class='wizard two'>
                    <h1 data-text="meet" ></h1>
                    <p data-text="name"> 
                    </p>
                    <form id="start-game">
                        <input data-text="namePlaceHolder" tabindex="1" required maxlength="50" minlength="3" id="name" type="text" placeholder="" />
                        <div class="choose-gender">
                            <img data-text="woman" data-image="image" tabindex="2" class="gender" data-gender="woman" title="" alt="" src="./images/gender/woman.png" alt="Kadın" />
                            <img data-text="man" data-image="image" tabindex="3" class="gender" data-gender="man" title="" alt="" src="./images/gender/man.png" alt="Erkek" />
                        </div>
                        <button data-text="buttonOk"></button>
                    </form>
                </div>
        </div>
        `
    },
    after_render: () => {
        let currentWizard = 0
        const wizard = Array.from(document.querySelectorAll('.wizard'))
        const next = document.getElementById('next')
        const form = document.getElementById('start-game')
        const genders = document.querySelectorAll('.gender')

        let selectedGender = ''
        const elementList = []


        getTextsByLangauge()

        genders.forEach(gender => {
            gender.addEventListener('click', e => {
                selectedGender = e.target.dataset.gender
                gender.classList.add('selected')
            })
        })

        form.addEventListener('submit', e => {
            e.preventDefault()
            const name = document.getElementById('name').value
            if (selectedGender.trim().length <= 0) {
                alert('Lütfen cinsiyetinizi Seçin')
                return
            }
            saveToLocalStorage(
                'profile',
                JSON.stringify({
                    name,
                    gender: selectedGender
                })
            )
            render(gameView)

        })

        next.addEventListener('click', _ => {
            currentWizard++
            wizard[currentWizard - 1].style.display = 'none'
            showWizard()
        })

        showWizard()

        function showWizard() {
            wizard[currentWizard].style.display = 'flex'
        }

    }
}

export default introduceView