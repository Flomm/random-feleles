import { c6 } from '../commonTS/lists';
import { generateFields, startApp } from '../commonTS/functions';

window.addEventListener('load', () => generateFields(c6));

const button: HTMLElement = document.getElementById('chooseStudent');
button.onclick = (): void => {
  startApp(c6);
};
