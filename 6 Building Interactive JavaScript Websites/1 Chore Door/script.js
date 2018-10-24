//Returns URL of directory containing the document
function documentDirURL() {
  const protocol = document.location.protocol;
  const host = document.location.host;
  const filePath = document.location.pathname.split( '/' );
  let dirPath = '';
  for ( let i = 0 ; i < filePath.length - 1; i++ ){
    if ( filePath[i] ) dirPath += '/' + filePath[i];
  }
  return protocol + '//' + host + dirPath;
}

const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');

const startButton = document.getElementById('start');

const botDoorPath = documentDirURL() + "/images/robot.svg";
const beachDoorPath = documentDirURL() + "/images/beach.svg";
const spaceDoorPath = documentDirURL() + "/images/space.svg";
const closedDoorPath = documentDirURL() + "/images/closed_door.svg";

let numClosedDoors = 3;
let currentlyPlaying = true;

let door1WillOpenTo='';
let door2WillOpenTo='';
let door3WillOpenTo='';

const isBot = door => door.src === botDoorPath ? true : false;

const isDoorClosed = door => door.src === closedDoorPath ? true : false;

const gameOver = (status) => {
  if (status === 'win' ) {
    startButton.innerHTML = 'You Win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}

const playDoor = (door) => {
  console.log("Door played");
  if (--numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const startRound = () => {
  numClosedDoors = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  switch (choreDoor) {
    case 0 :
      door1WillOpenTo = botDoorPath;
      door2WillOpenTo = beachDoorPath;
      door3WillOpenTo = spaceDoorPath;
      break;      
    case 1 :
      door2WillOpenTo = botDoorPath;
      door3WillOpenTo = beachDoorPath;
      door1WillOpenTo = spaceDoorPath;
      break;      
    case 2 :
      door3WillOpenTo = botDoorPath;
      door2WillOpenTo = beachDoorPath;
      door1WillOpenTo = spaceDoorPath;
      break;      
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) startRound() ;
}

door1.onclick = () => {
  console.log("Door 1 clicked");

    if ( currentlyPlaying && isDoorClosed(door1)) {
      door1.src = door1WillOpenTo;
      playDoor(door1);
    }
}

door2.onclick = () => {
  if ( currentlyPlaying && isDoorClosed(door2)) {
    door2.src = door2WillOpenTo;
    playDoor(door2);
  }
}
door3.onclick = () => {
  if ( currentlyPlaying && isDoorClosed(door3)) {
    door3.src = door3WillOpenTo;
    playDoor(door3);
  }
}

startRound();
