const inputOne = document.querySelector('#inputOne');
const form = document.querySelector('#form');
const inputTwo = document.querySelector('#inputTwo');
const btnCalculate = document.querySelector('#btnCalculate');
const result = document.querySelector('#result');

form.addEventListener('submit', calculateAdd);

function calculateAdd(event) {
    event.preventDefault();
    let numOne = parseInt(inputOne.value);
    let numTwo = parseInt(inputTwo.value);
    if (Number.isInteger(numOne) && Number.isInteger(numTwo)) {
        result.innerText = numOne + numTwo;
    } else {
        result.innerText = "Something has leaved wrong"
    }
}