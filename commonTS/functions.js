"use strict";
exports.__esModule = true;
exports.startApp = exports.generateFields = void 0;
function generateFields(list) {
    for (var i = 0; i <= list.length - 1; i++) {
        var newField = document.createElement('div');
        newField.classList.add('name_holder');
        newField.innerHTML += list[i];
        document.getElementById('names').appendChild(newField);
    }
}
exports.generateFields = generateFields;
function getChilds(name) {
    return document.getElementById(name).children;
}
function clearFields() {
    var nameDivs = getChilds('names');
    for (var i = 0; i <= nameDivs.length - 1; i++) {
        nameDivs[i].classList.remove('winner');
    }
    return nameDivs;
}
function chooseRandomStudent(list) {
    var nameDivs = clearFields();
    var randomName = Math.round(Math.random() * (list.length - 1));
    nameDivs[randomName].classList.add('winner');
}
function playMusic(path) {
    var music = new Audio(path);
    music.play();
}
function startApp(nameList) {
    var inter = setInterval(function () { return chooseRandomStudent(nameList); }, 50);
    playMusic('../resources/ticking.mp3');
    setTimeout(function () {
        clearInterval(inter);
        playMusic('../resources/Bomb+2.mp3');
    }, 5000);
}
exports.startApp = startApp;
