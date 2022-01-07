//Christopher Hui
//TTP Assignment-4
//Please comment every other question when testing one

//Question 1
// const leftBox = document.querySelector('.left')
// const rightBox = document.querySelector('.right')
// const box = document.querySelector('.box')

// rightBox.onclick = () => box.textContent = "I'm right";
// leftBox.onclick = () => box.textContent = "No, I'm right";

//Question 2
// const hover = document.querySelector('div');

// document.addEventListener("mouseover", e => {
//     alert("Hey, I told you not to hover over me!");
// })

//Question 4
const username = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const submission = document.querySelector('.submitted');
let numbers = [9];

form.addEventListener('submit', (e) => {
    let messages = [];

    if (password.value.match(numbers)) {
        alert("Password must be 012345678");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})

// form.onclick = function validInformation() {
//     submission.textContent = "Submission Completed!";
// }