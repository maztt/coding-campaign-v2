const playMenuSound = () => {
  const menuSound = new Audio('./src/audios/menu-sound-effect.mp4')
  menuSound.play()
}

const navigateToNewGame = () => {
  const newGame = document.getElementById('newgame')
  setTimeout(() => {
    newGame.click(), 2000
  })
}

const navigateToOptions = () => {
  const options = document.getElementById('options')
  setTimeout(() => {
    options.click(), 2000
  })
}

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
          navigateToNewGame()
        } else {
          navigateToOptions()
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