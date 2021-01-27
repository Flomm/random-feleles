import { b8 } from '../commonTS/lists';
import { generateFields, startApp } from '../commonTS/functions';

window.addEventListener('load', () => generateFields(b8));

const button: HTMLElement = document.getElementById('chooseStudent');
button.onclick = (): void => {
  startApp(b8);
};
