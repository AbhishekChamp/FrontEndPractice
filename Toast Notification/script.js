const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = [
    "Hello Internet",
    "Coder",
    "What's up guys",
    "Toxic Champ",
]

const colors = [
    "info",
    "red",
    "green",
    "brown",
    "blue",
]

button.addEventListener('click', () => createNotification())

function createNotification(message = null, color = null) {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(color ? color : getRandomColor())
    notification.innerText = message ? message : getRandomMessage()
    
    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}