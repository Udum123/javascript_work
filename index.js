// document.getElementById("count").innerText = 5

let countEL = document.getElementById("count-el")

let count = 0
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button

function increment() {
    count = count + 1000
    countEL.innerText = count
    //console.log(count)
}
