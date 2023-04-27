import { playMenuSound } from '../js/sound-effects'

const message = document.getElementById("typedtext");
const textSpeed = 30;

let i = 0;
let count = 0;
let isActive = false;

document.onkeydown = function(e) {

  const event = e.key
  
  switch(event) {
    case 'Enter':
      chat()
    }
  }
  
function clearChat() {
    message.innerHTML = '';
}
  
async function chat() {
  if (isActive === true) {
    return
  } else {
    playMenuSound()
    clearChat();
    await chatWriter()
  }
}

async function chatWriter() {
  isActive = true;
  if (i < professorOak[count].length) {
    message.innerHTML += professorOak[count].charAt(i);
    i++;
    setTimeout(chatWriter, textSpeed);
  } else {
    i = 0;
    count++
    isActive = false
  }
}
