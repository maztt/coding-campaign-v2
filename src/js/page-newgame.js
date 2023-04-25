window.alert('Maximize your experience by using the keyboard.')

function playMenuSound() {
  const menuSound = new Audio('../audios/menu-sound-effect.mp4');
  menuSound.play();
}

const option_NewGame = document.getElementById('options-1')
const option_Options = document.getElementById('options-2')


document.onkeydown = function(e) {

const event = e.key

switch (event) {
    case 'ArrowUp':
        if (option_NewGame.attributes.class.value == 'selected') {
          console.log('pra cima')
        } else {
          option_Options.classList.toggle('selected');
          option_NewGame.classList.toggle('selected');
          playMenuSound();
        }             
        break;
    case 'ArrowDown':
        if (option_Options.attributes.class.value  == 'selected') {
          break;
        } else {
          option_NewGame.classList.toggle('selected');
          option_Options.classList.toggle('selected');
          playMenuSound();
        }             
        break;
    case 'Enter':
        console.log('enter')
        if (option_NewGame.classList.contains('selected')) {
          console.log('newgame: esta opção')
          newGame()
        } else {
          console.log('options: esta opção')
          option()
        }
        playMenuSound();
      break;
    case 'Spacebar':
        console.log('espaço');
        if (option_NewGame.classList.contains('selected')) {
          console.log('newgame: esta opção')
        } else {
          console.log('options: esta opção')
          option()
        }
        playMenuSound();
        break;
}

}

function newGame() {
  const newgame = document.getElementById('newgame')
  setTimeout(newgame.click(), 2000)
}

function option() {
  const options = document.getElementById('options')
  setTimeout(options.click(), 2000)
}