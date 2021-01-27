export { generateFields, getChilds, clearFields, chooseRandomStudent, playMusic };

function generateFields(list: string[]): void {
  for (let i: number = 0; i <= list.length - 1; i++) {
    let newField: HTMLDivElement = document.createElement('div');
    newField.classList.add('name_holder');
    newField.innerHTML += list[i];
    document.getElementById('names').appendChild(newField);
  }
}

function getChilds(name: string): HTMLCollection {
  return document.getElementById(name).children;
}

function clearFields(): HTMLCollection {
  let nameDivs: HTMLCollection = getChilds('names');
  for (let i: number = 0; i <= nameDivs.length - 1; i++) {
    nameDivs[i].classList.remove('winner');
  }
  return nameDivs;
}

function chooseRandomStudent(list: string[]): void {
  let nameDivs: HTMLCollection = clearFields();
  let randomName = Math.round(Math.random() * (list.length - 1));
  nameDivs[randomName].classList.add('winner');
}

function playMusic(path: string) {
  let music = new Audio(path);
  music.play();
}
