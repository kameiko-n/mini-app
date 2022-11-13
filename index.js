const board = document.querySelector('#board')
const colors = [
    '#ffff67',
    ' #ff6600',
    '#ff3300',
    '#cd3333',
    '#ff0066',
    '#ff33cc',
    '#cd00cc',
    '#9a33ff',
]
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
