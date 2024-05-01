var button = document.getElementById('button')

let randomNum = math.random() * 100;

function clicked() {
window.open("https://youtube.com")
console.log(randomNum)
}

button.addEventListener('click', clicked)
