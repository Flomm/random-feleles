import { b5 } from '../commonTS/lists';
import { generateFields, startApp } from '../commonTS/functions';

window.addEventListener('load', () => generateFields(b5));

const button: HTMLElement = document.getElementById('chooseStudent');
button.onclick = (): void => {
  startApp(b5);
};
