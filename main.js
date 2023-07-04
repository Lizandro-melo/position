window.onload = () => {
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.checked = false
    }
}


const containerStatic = document.querySelector('#container-static');
const quadroStatic = containerStatic.querySelector('.quadro')
const elementoStatic = quadroStatic.querySelector('.elemento') 
const controladorStatic = containerStatic.querySelector('.controlador')
const inputsStatic = controladorStatic.querySelectorAll("input")

for (let i = 0; i < inputsStatic.length; i++) {
    const element = inputsStatic[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsStatic[0]:
                elementoStatic.classList.toggle("static")
                break;
            case inputsStatic[1]:
                elementoStatic.classList.toggle("top")
                break;
            case inputsStatic[2]:
                elementoStatic.classList.toggle("left")
                break;
            case inputsStatic[3]:
                elementoStatic.classList.toggle("right")
                break;
            case inputsStatic[4]:
                elementoStatic.classList.toggle("bottom")
                break;
        }
    })
}

const containerRelative = document.querySelector('#container-relative');
const quadroRelative = containerRelative.querySelector('.quadro')
const elementoRelative = quadroRelative.querySelector('.elemento') 
const controladorRelative = containerRelative.querySelector('.controlador')
const inputsRelative = controladorRelative.querySelectorAll("input")

for (let i = 0; i < inputsRelative.length; i++) {
    const element = inputsRelative[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsRelative[0]:
                elementoRelative.classList.toggle("relative")
                break;
            case inputsRelative[1]:
                elementoRelative.classList.toggle("top")
                break;
            case inputsRelative[2]:
                elementoRelative.classList.toggle("left")
                break;
            case inputsRelative[3]:
                elementoRelative.classList.toggle("right")
                break;
            case inputsRelative[4]:
                elementoRelative.classList.toggle("bottom")
                break;
        }
    })
}

const containerAbsolute = document.querySelector('#container-absolute');
const quadroAbsolute = containerAbsolute.querySelector('.quadro')
const elementoAbsolute = quadroAbsolute.querySelector('.elemento') 
const controladorAbsolute = containerAbsolute.querySelector('.controlador')
const inputsAbsolute = controladorAbsolute.querySelectorAll("input")

for (let i = 0; i < inputsAbsolute.length; i++) {
    const element = inputsAbsolute[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsAbsolute[0]:
                elementoAbsolute.classList.toggle("absolute")
                break;
            case inputsAbsolute[1]:
                elementoAbsolute.classList.toggle("top")
                break;
            case inputsAbsolute[2]:
                elementoAbsolute.classList.toggle("left")
                break;
            case inputsAbsolute[3]:
                elementoAbsolute.classList.toggle("right")
                break;
            case inputsAbsolute[4]:
                elementoAbsolute.classList.toggle("bottom")
                break;
        }
    })
}

const containerSticky = document.querySelector('#container-sticky');
const quadroSticky = containerSticky.querySelector('.quadro')
const elementoSticky = quadroSticky.querySelector('.elemento') 
const controladorSticky = containerSticky.querySelector('.controlador')
const inputsSticky = controladorSticky.querySelectorAll("input")

for (let i = 0; i < inputsSticky.length; i++) {
    const element = inputsSticky[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsSticky[0]:
                elementoSticky.classList.toggle("sticky")
                break;
            case inputsSticky[1]:
                elementoSticky.classList.toggle("top")
                break;
        }
    })
}

const containerFixed = document.querySelector('#container-fixed');
const quadroFixed = containerFixed.querySelector('.quadro')
const elementoFixed = quadroFixed.querySelector('.elemento') 
const controladorFixed = containerFixed.querySelector('.controlador')
const inputsFixed = controladorFixed.querySelectorAll("input")

for (let i = 0; i < inputsFixed.length; i++) {
    const element = inputsFixed[i];
    element.addEventListener('change', (event) => {
        switch (event.target) {
            case inputsFixed[0]:
                elementoFixed.classList.toggle("fixed")
                break;
            case inputsFixed[1]:
                elementoFixed.classList.toggle("top")
                break;
            case inputsFixed[2]:
                elementoFixed.classList.toggle("left")
                break;
            case inputsFixed[3]:
                elementoFixed.classList.toggle("right")
                break;
            case inputsFixed[4]:
                elementoFixed.classList.toggle("bottom")
                break;
        }
    })
}