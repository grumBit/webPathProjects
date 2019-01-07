// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function(event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.innerHTML="Grum Waz Ere";
  event.target.style.backgroundColor = randomColor;
  console.log(`.target = ${event.target}, .type = ${event.type}, .timeStamp = ${event.timeStamp}`);
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;