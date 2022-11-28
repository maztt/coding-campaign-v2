const option_Productivity = document.getElementById('option_productivity')
const option_Studying = document.getElementById('option_studying')
const option_Listening = document.getElementById('option_listening')
const option_ToHave = document.getElementById('option_tohave')
const option_Battle = document.getElementById('option_battle')
const option_Multiplayer = document.getElementById('option_multiplayer')
const option_Language = document.getElementById('option_language')
const option_Exit = document.getElementById('option_exit')

const options = [option_Productivity, option_studying, option_Listening, option_ToHave, option_Battle, option_Multiplayer, option_Language, option_Exit];

let optionIndex = 0;

function playMenuSound() {
  const menuSound = new Audio('src/audios/menu-sound-effect.mp4');
  menuSound.play();
}

document.onkeydown = function(e) {
  const event = e.key

  switch(event) {
    case 'ArrowUp':
      if (optionIndex == 0) {
        return
      } else {
        optionIndex--
        options[optionIndex + 1].classList.remove('selected')
        options[optionIndex].classList.add('selected')
        optionDisable()
        optionEnable()
        playMenuSound()
      }
      console.log(optionIndex)
      break
    case 'ArrowDown':
      if (optionIndex == 7) {
        return
      } else {
        optionIndex++
        options[optionIndex - 1].classList.remove('selected')
        options[optionIndex].classList.add('selected')
        optionDisable()
        optionEnable()
        playMenuSound()
      }
      console.log(optionIndex)
      break
  }
}


const action_Exit = document.getElementById('i-exit')
const options_group = document.getElementsByClassName('options_group')

const optionEnable = () => {
  
  
  for (let i = 0; i < options_group.length; i++) {
    optionSelected = options_group[i].parentElement.parentElement.previousElementSibling;
  
      if (optionSelected.classList.contains('selected')) {
      options_group[i].parentElement.firstElementChild.style.visibility = 'visible';
      options_group[i].parentElement.lastElementChild.style.visibility = 'visible';
      }
  }
}

const optionDisable = () => {

  for (let i = 0; i < options_group.length; i++) {
    options_group[i].parentElement.firstElementChild.style.visibility = 'hidden';
    options_group[i].parentElement.lastElementChild.style.visibility = 'hidden';
  }

}
  
  // options_group.forEach((group) => {
  // })
