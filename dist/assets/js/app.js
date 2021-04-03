const inpStep = document.querySelector('#inputStep')
const txtUser = document.querySelector('#textUser')
const txtEncrypt = document.querySelector('#textEncrypt')
const msg = document.querySelector('.msg')

const rdEncrypt = document.querySelector('#radioEncrypt')
const rdDecrypt = document.querySelector('#radioDecrypt')

const btnClean = document.querySelector('#btnClean')


function clearForms() {
    inpStep.value = ''
    txtUser.value = ''
    txtEncrypt.value = ''
    msg.innerHTML = ''
}

function crypt(str) {
    let step = inpStep.value % 33
    let lowerCaseStr = str.toLowerCase()
    let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split('')
    let newStr = ''
    let newIndex = 0
    for (let i = 0; i < lowerCaseStr.length; i++) {
        let currentLetter = lowerCaseStr[i]
        if (currentLetter === ' ') {
            newStr = newStr + currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        if (rdEncrypt.checked === true) {

            newIndex = currentIndex + step
        }
        if (rdDecrypt.checked === true) {
            newIndex = currentIndex - step
        }

        if (newIndex > 32) {
            newIndex = newIndex - 33
        }
        if (newIndex < 0) {
            newIndex = newIndex + 33
        }
        if (str[i] === str[i].toUpperCase()) {
            newStr = newStr + alphabet[newIndex].toUpperCase()
        } else {
            newStr = newStr + alphabet[newIndex]
        }
    }
    return newStr
}

txtUser.addEventListener('keyup', () => {
    txtEncrypt.value = crypt(txtUser.value)
    msg.innerHTML = 'Всего символов без пробелов:' + ' ' + countLetter()
});


/* Подсчет символов без пробелов */

function countLetter() {
    let kol = txtEncrypt.value.split(' ').join('')
    return kol.length
}

btnClean.onclick = function () {
    clearForms()
}


rdEncrypt.onclick = function () {
    clearForms()
}
rdDecrypt.onclick = function () {
    clearForms()
}