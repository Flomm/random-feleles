import { b8 } from '../commonTS/lists';
import { generateFields, chooseRandomStudent, playMusic } from '../commonTS/functions';

window.addEventListener('load', () => generateFields(b8));

const button: HTMLElement = document.getElementById('chooseStudent');
button.onclick = (): void => {
  let inter: number = setInterval(() => chooseRandomStudent(b8), 50);
  playMusic('../resources/ticking.mp3');
  setTimeout((): void => {
    clearInterval(inter);
    playMusic('../resources/Bomb+2.mp3');
  }, 5000);
};
