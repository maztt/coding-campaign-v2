const option_Productivity = document.getElementById('option_productivity')
const option_Studying = document.getElementById('option_studying')
const option_Listening = document.getElementById('option_listening')
const option_ToHave = document.getElementById('option_tohave')
const option_Battle = document.getElementById('option_battle')
const option_Multiplayer = document.getElementById('option_multiplayer')
const option_Language = document.getElementById('option_language')
const option_Exit = document.getElementById('option_exit')

const action_Exit = document.getElementById('i-exit')

const options = [option_Productivity, option_studying, option_Listening, option_ToHave, option_Battle, option_Multiplayer, option_Language, option_Exit];

let optionIndex = 0;
let itemIndex = 0;

function playMenuSound() {
  const menuSound = new Audio('../audios/menu-sound-effect.mp4');
  menuSound.play();
}


function exit() {
  setTimeout(action_Exit.click(), 2000)
}

function getOption(optionIndex) {
  let items = options[optionIndex].nextElementSibling.firstElementChild.children[1].children
  let chosenOption;
  
  for (let i = 0; i < items.length; i++) {
    if (!items[i].classList.contains('dontdisplay')) {
      chosenOption = i;
    }

    if (items[i].classList.contains('chosen')) {
      chosenOption = i;
    }
  }

  return chosenOption;
}

function getMultipleOptions(optionIndex) {
  let items = options[optionIndex].nextElementSibling.firstElementChild.children[1].children
  let chosenOption;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('chosen')) {
      chosenOption = i;
    }
  }

  return chosenOption;
}


document.onkeydown = function(e) {
  const event = e.key

  switch(event) {

    case 'ArrowUp':
      if (optionIndex == 0) {
        return
      } else {

        optionIndex--

        if (optionIndex == 3) {
          itemIndex = getMultipleOptions(optionIndex);
        } else {
          itemIndex = getOption(optionIndex);
        }

        options[optionIndex + 1].classList.remove('selected')
        options[optionIndex].classList.add('selected')
        optionDisable()
        optionEnable()
        arrowLimiter()
        playMenuSound()

      }
      break
      
    case 'ArrowDown':
      if (optionIndex == 7) {
        return
      } else {

        optionIndex++

        if (optionIndex == 3) {
          itemIndex = getMultipleOptions(optionIndex);
        } else if (optionIndex != 7) {
          itemIndex = getOption(optionIndex);
        }

        options[optionIndex - 1].classList.remove('selected')
        options[optionIndex].classList.add('selected')
        optionDisable()
        optionEnable()
        arrowLimiter()
        playMenuSound()

      }
      break

    case 'ArrowRight':
      items = options[optionIndex].nextElementSibling.firstElementChild.children[1].children
      if (itemIndex >= items.length - 1) {
        return
      } else {
        if (optionIndex == 3) {
          itemIndex++
          items[itemIndex].classList.add('chosen')
          items[itemIndex - 1].classList.remove('chosen')
        } else {
          itemIndex++
          items[itemIndex].classList.remove('dontdisplay')
          items[itemIndex - 1].classList.add('dontdisplay')
        }

        arrowLimiter()
        playMenuSound()
      }
      break

    case 'ArrowLeft':
      items = options[optionIndex].nextElementSibling.firstElementChild.children[1].children
      if (itemIndex == 0) {
        return
      } else {
        if (optionIndex == 3) {
          itemIndex--
          items[itemIndex].classList.add('chosen')
          items[itemIndex + 1].classList.remove('chosen')
        } else {
        itemIndex--
        items[itemIndex].classList.remove('dontdisplay')
        items[itemIndex + 1].classList.add('dontdisplay')
        }
        arrowLimiter()
        playMenuSound()
      }
      break

      case 'Enter':
        if (option_Exit.classList.contains('selected')) {
          exit()
        }
  }
}



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

const arrowLimiter = () => {

  items = options[optionIndex].nextElementSibling.firstElementChild.children[1].children

  if (itemIndex == 0) {
    options[optionIndex].nextElementSibling.firstElementChild.firstElementChild.style.opacity = '.5'
  } else {
    options[optionIndex].nextElementSibling.firstElementChild.firstElementChild.style.opacity = '1'
  }

  if (itemIndex == items.length - 1) {
    options[optionIndex].nextElementSibling.firstElementChild.lastElementChild.style.opacity = '.5'
  } else {
    options[optionIndex].nextElementSibling.firstElementChild.lastElementChild.style.opacity = '1'
  }

}


