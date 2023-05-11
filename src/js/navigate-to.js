export const newGame = () => {
  const newGame = document.getElementById('newgame')
  setTimeout(() => {
    newGame.click(), 2000
  })
}

export const options = () => {
  const options = document.getElementById('options')
  setTimeout(() => {
    options.click(), 2000
  })
}

export const home = () => {
  const action_Exit = document.getElementById('i-exit')
  setTimeout(() => {
    action_Exit.click(), 750   
  })
}
