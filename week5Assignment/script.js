//to avoid more than 100 or less than 0

const btn = document.querySelector('.button');
let output = document.getElementById('message')
const returnMessage1 = 'Try Harder your score is low!';
const returnMessage2 = 'Hey that is a good score but you can do better!';
const returnMessage3 = 'Wow you did great!';
const returnMessage4 = 'Please insert a valid score!';

function submitMessage() {
    let numValue = parseInt(document.getElementById('value').value);
    if(numValue >= 0 && numValue <= 30 ) {
        output.innerHTML = returnMessage1;
    } else if (numValue >= 31 && numValue <=60) {
        output.innerHTML = returnMessage2;
    } else if (numValue >=61 && numValue <= 100) {
        output.innerHTML = returnMessage3;
    } else {
        output.innerHTML = returnMessage4;
    }
}

btn.addEventListener('click', submitMessage);