const firstGroup = [
  "Hello there! Glad to meet you, welcome to the World of Coding!",
  "My name is OAK! People call me the Coding Prof!",
  "This world is inhabited by creatures called POKEMÓN! For some people, pokémon are pets.",
  "Others use them for fights. Myself... I study Coding Languages as a profession.",
  "Today I'll be guiding you the best way I can so you can begin your journey the best way you can",
  "Firstly, don't be afraid. There will be a lot of information but you'll get used to it.",
  "Now tell me, after checking the descriptions choose one of the alternatives.",
];

const secondGroup = [
  "Wow! That's a really great choice!",
  "Now come with me, I'll show you many options from which you can pick a main language.",
  "for your main campaign and also one more so you can have fun with the secondary quests",
  "But here's a big reminder! Listen close!",
  "This will not define your whole career, it's okay to experience them until you pick the one you most like",
  "And feel comfortable dealing with, okay? You have to like it!",
  "Sure, I see you there nodding positively.",
  "Let's check our candidates."
]

const message = document.getElementById("typedtext");
const textSpeed = 40;
const textStart = 0;
const textLength = firstGroup[0].length;
const scrollAt = 20;

let content = '';


document.onkeydown = function(e) {
  const event = e.key

  switch(event) {
    case 'Enter':
      chat();
  }
}

  var iSpeed = 40; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = firstGroup[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 30;
   
  function chat() {

    if (i < txt.length) {
      message.innerHTML += txt.charAt(i);
      i++;
      setTimeout(chat, speed);
    }
  }

  function typewriter() {

   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents = firstGroup[iRow++] + '<br />';
   }

   destination.innerHTML = sContents + firstGroup[iIndex].substring(0, iTextPos) + "|";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != firstGroup.length ) {
     iArrLength = firstGroup[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }

  }
  
  function playMenuSound() {
    const menuSound = new Audio('src/audios/menu-sound-effect.mp4');
    menuSound.play();
  }