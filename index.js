let num1 = 8
let num2 = 2
let sumParagraph = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    sum = num1 + num2
    console.log(sum)
    sumParagraph.textContent = "Sum: " + sum
}

function subtract() {
    sum = num1 - num2
    console.log(sum)
    sumParagraph.textContent = "Sum: " + sum
}
function divide() {
    sum = num1 / num2
    console.log(sum)
    sumParagraph.textContent = "Sum: " + sum
}
function multiply() {
    sum = num1 * num2
    console.log(sum)
    sumParagraph.textContent = "Sum: " + sum
}