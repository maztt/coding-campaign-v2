import { playMenuSound } from './sound-effects.js'

const navigateToHome = () => {
  const action_Exit = document.getElementById('i-exit')
  setTimeout(() => {
    action_Exit.click(), 750   
  })
}

const optionEnable = () => {
  for (let i = 0; i < options_group.length; i++) {
    let groupSelected = options_group[i].parentElement.parentElement.previousElementSibling
    let optionSelected = options_group[i].parentElement
    if (groupSelected.classList.contains('selected')) {
    optionSelected.firstElementChild.style.visibility = 'visible';
    optionSelected.lastElementChild.style.visibility = 'visible';
    }
  }
}

const optionDisable = () => {
  for (let i = 0; i < options_group.length; i++) {
    let notSelectedGroup = options_group[i].parentElement
    notSelectedGroup.firstElementChild.style.visibility = 'hidden';
    notSelectedGroup.lastElementChild.style.visibility = 'hidden';
  }
}

const arrowLimiter = () => {
  const listOfItems = options[optionIndex].nextElementSibling.firstElementChild.children[1].children
  const firstOfTheList = options[optionIndex].nextElementSibling.firstElementChild.firstElementChild
  const lastOfTheList = options[optionIndex].nextElementSibling.firstElementChild.lastElementChild

  if (itemIndex == 0) {
    firstOfTheList.style.opacity = '.5'
  } else {
    firstOfTheList.style.opacity = '1'
  }
  if (itemIndex == listOfItems.length - 1) {
    lastOfTheList.style.opacity = '.5'
  } else {
    lastOfTheList.style.opacity = '1'
  }
}

const option_Productivity = document.getElementById('option_productivity')
const option_Studying = document.getElementById('option_studying')
const option_Listening = document.getElementById('option_listening')
const option_ToHave = document.getElementById('option_tohave')
const option_Battle = document.getElementById('option_battle')
const option_Multiplayer = document.getElementById('option_multiplayer')
const option_Language = document.getElementById('option_language')
const option_Exit = document.getElementById('option_exit')
const options_group = document.getElementsByClassName('options_group')
const options = [option_Productivity, option_Studying, option_Listening, option_ToHave, option_Battle, option_Multiplayer, option_Language, option_Exit];

let optionIndex = 0;
let itemIndex = 0;

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

const manageOption = () => {
  optionDisable()
  optionEnable()
  arrowLimiter()
  playMenuSound()
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
        manageOption()
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
        manageOption()
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
          playMenuSound()
          navigateToHome()
        }
  }
}
