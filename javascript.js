var button = document.getElementById('button')

let randomNum = math.random() * 100;

function clicked() {
window.alert('This device has been compromised. Have a good day!')
console.log(randomNum)
}

button.addEventListener('click', clicked)
