const professorOak = [
  "Hello there! Glad to meet you, welcome to the World of Coding!",
  "My name is OAK! People call me the Coding Prof!",
  "This world is inhabited by creatures called POKEMÓN! For some people, pokémon are pets.",
  "Others use them for fights. Myself... I study Coding Languages as a profession.",
  "Today I'll be guiding you the best way I can so you can begin your journey the best way you can",
  "Firstly, don't be afraid. There will be a lot of information but you'll get used to it.",
  "Now tell me, after checking the descriptions choose one of the alternatives.",
  "Wow! That's a really great choice!",
  "Now come with me, I'll show you many options from which you can pick a main language.",
  "for your main campaign and also one more so you can have fun with the secondary quests",
  "But here's a big reminder! Listen close!",
  "This will not define your whole career, it's okay to experience them until you pick the one you most like",
  "And feel comfortable dealing with, okay? You have to like it!",
  "Sure, I see you there nodding positively.",
  "Let's check our candidates."
];

const message = document.getElementById("typedtext");
const textSpeed = 40;

let i = 0;
let count = 0;

document.onkeydown = function(e) {
  const event = e.key
  
  switch(event) {
    case 'Enter':
      playMenuSound()
      clearChat();
      chat();
    }
    
  }
  
  
  function clearChat() {
      message.innerHTML = '';
  }
  
  function chat() {
  

    if (i < professorOak[count].length) {
      message.innerHTML += professorOak[count].charAt(i);
      i++;
      setTimeout(chat, textSpeed);
    } else {
      i = 0;
      count++
  }

}

function playMenuSound() {
  const menuSound = new Audio('src/audios/menu-sound-effect.mp4');
  menuSound.play();
}