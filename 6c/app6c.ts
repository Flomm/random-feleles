import { c6 } from '../commonTS/lists';
import { generateFields, chooseRandomStudent, playMusic } from '../commonTS/functions';

window.addEventListener('load', () => generateFields(c6));

const button: HTMLElement = document.getElementById('chooseStudent');
button.onclick = (): void => {
  let inter: number = setInterval(() => chooseRandomStudent(c6), 50);
  playMusic('../resources/ticking.mp3');
  setTimeout((): void => {
    clearInterval(inter);
    playMusic('../resources/Bomb+2.mp3');
  }, 5000);
};
