import { playMenuSound } from './sound-effects.js'
import { newGame, options } from './navigate-to.js'

const option_NewGame = document.getElementById('option-newgame')
const option_Options = document.getElementById('option-options')


// In case the user is using keyboard
document.onkeydown = function(e) {
  const event = e.key
  switch (event) {
    case 'ArrowUp':
        playMenuSound()
        option_Options.classList.toggle('selected')
        option_NewGame.classList.toggle('selected')
        break
    case 'ArrowDown':
        playMenuSound()
        option_NewGame.classList.toggle('selected')
        option_Options.classList.toggle('selected')
        break
    case 'Enter':
        if (option_NewGame.classList.contains('selected')) {
          newGame()
        } else {
          options()
        }
        break
    }
}

// In case the user is using mobile or mouse
option_NewGame.addEventListener('click', (e) => {
  playMenuSound()
  e.preventDefault()
  setTimeout(() => {
    window.location.href = 'src/pages/newgame.html';
  }, 750)
})

option_Options.addEventListener('click', (e) => {
  playMenuSound()
  e.preventDefault()
  setTimeout(() => {
    window.location.href = 'src/pages/options.html';
  }, 750)
})