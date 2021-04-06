import startView from './views/start-view.js'
import router from './router.js'

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const deleteFromLocalStorage = (key) => {
    delete localStorage.getItem(key)
}

export const setInitialView = () => {
    app.innerHTML = startView.render()
    startView.after_render()
}

export const render = (view) => {
    saveToLocalStorage('lastView', view.name)
    app.innerHTML = view.render()
    view.after_render()
}

export const loadLastView = () => {
    const view = getFromLocalStorage('lastView')
    if (!view) return
    render(router[view])
}

export const getTextsByLangauge = async () => {
    const language = getFromLocalStorage('prefferedLanguage')
    const response = await fetch(`./languages/${language}.json`)
    const data = await response.json()
    Object.keys(data).forEach(item => {
        const elements = document.querySelectorAll(`[data-text="${item}"]`)
        elements.forEach(element => {
            if (element.getAttribute('data-image')) {
                element.title = data[item]
                element.alt = data[item]
            } 
            else if(element.classList.contains('bar-item')){
                element.setAttribute('title', data[item])
            }
            else {
                element.placeholder = data[item]
                element.innerHTML = data[item]
                
            }
        })

    })
}