let cont = 0
let currentNumber = document.getElementById('currentNumber')

function increment() {
    if (cont < 10) {
        cont ++
    } 
    currentNumber.innerHTML = cont
}

function decrement() {
    if (cont > 0) {
        cont --
    }
    currentNumber.innerHTML = cont
}
