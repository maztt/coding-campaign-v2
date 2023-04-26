function playMenuSound () {
  const menuSound = new Audio('./src/audios/menu-sound-effect.mp4');
  menuSound.play();
}

export { playMenuSound }