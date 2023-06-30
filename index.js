
let countEL = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1000
    countEL.innerText = count
    //console.log(count)
}

// save function 
function save() {
    console.log(count)
}

