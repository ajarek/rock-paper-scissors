const playerImg = document.querySelectorAll('.player .wrapp img')
const computerImg = document.querySelectorAll('.computer .wrapp img')
const fightPlayer = document.querySelector('#fightPlayer')
const fightComputer = document.querySelector('#fightComputer')
const resultPlayer = document.querySelector('.player span')
const resultComputer = document.querySelector('.computer span')
const pointsPlayer = document.querySelector('.player p')
const pointsComputer = document.querySelector('.computer p')

let pointsPl = 0
let pointsCo = 0
playerImg.forEach(el => {
    el.addEventListener('click', (e) => {
        resultPlayer.innerHTML = ''
        resultComputer.innerHTML = ''
        fightComputer.innerHTML = ''

        let srcImg = e.target.getAttribute('src');
        fightPlayer.innerHTML = `<img src="${srcImg}" alt="">`

        let rps = new Array('pr.png', 'rk.png', 'sc.png')
        randomSrcImg = rps[Math.floor(Math.random() * computerImg.length)]

        setTimeout(draw, 700)

        const conditions = () => {
            if (srcImg === randomSrcImg) {
                resultPlayer.innerHTML = ' Draw';
                resultComputer.innerHTML = ' Draw'
            }
            if (srcImg === 'pr.png' && randomSrcImg === 'sc.png') {
                resultComputer.innerHTML = ' Win !'
                pointsCo++
                pointsComputer.innerHTML = 'points: ' + pointsCo

            }
            if (srcImg === 'rk.png' && randomSrcImg === 'pr.png') {
                resultComputer.innerHTML = ' Win !'
                pointsCo++
                pointsComputer.innerHTML = 'points: ' + pointsCo
            }
            if (srcImg === 'sc.png' && randomSrcImg === 'rk.png') {
                resultComputer.innerHTML = ' Win !'
                pointsCo++
                pointsComputer.innerHTML = 'points: ' + pointsCo
            }

            if (srcImg === 'pr.png' && randomSrcImg === 'rk.png') {
                resultPlayer.innerHTML = ' Win !'
                pointsPl++
                pointsPlayer.innerHTML = 'points: ' + pointsPl
            }
            if (srcImg === 'rk.png' && randomSrcImg === 'sc.png') {
                resultPlayer.innerHTML = ' Win !'
                pointsPl++
                pointsPlayer.innerHTML = 'points: ' + pointsPl
            }
            if (srcImg === 'sc.png' && randomSrcImg === 'pr.png') {
                resultPlayer.innerHTML = ' Win !'
                pointsPl++
                pointsPlayer.innerHTML = 'points: ' + pointsPl
            }
        }
        setTimeout(conditions, 700)
    })
})

const draw = () => {
    fightComputer.innerHTML = `<img src="${  randomSrcImg}" alt="">`
}