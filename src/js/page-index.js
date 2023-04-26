window.alert('Maximize your experience by using the keyboard.')

function playMenuSound () {
  const menuSound = new Audio('./src/audios/menu-sound-effect.mp4');
  menuSound.play();
}

function newGame() {
  const newgame = document.getElementById('newgame')
  setTimeout(newgame.click(), 2000)
}

function option() {
  const options = document.getElementById('options')
  setTimeout(options.click(), 2000)
}

window.alert('Maximize your experience by using the keyboard.')

const option_NewGame = document.getElementById('option-newgame')
const option_Options = document.getElementById('option-options')

document.onkeydown = function(e) {

  const event = e.key

  switch (event) {
      case 'ArrowUp':
          option_Options.classList.toggle('selected');
          option_NewGame.classList.toggle('selected');
          playMenuSound();       
          break;
      case 'ArrowDown':
          option_NewGame.classList.toggle('selected');
          option_Options.classList.toggle('selected');
          playMenuSound();
          break;
      case 'Enter':
          playMenuSound();
          if (option_NewGame.classList.contains('selected')) {
            setTimeout(newGame(), 1000)
          } else {
            setTimeout(option(), 1000)
          }
        break;
    }
}