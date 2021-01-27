"use strict";
exports.__esModule = true;
exports.playMusic = exports.chooseRandomStudent = exports.clearFields = exports.getChilds = exports.generateFields = void 0;
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
exports.getChilds = getChilds;
function clearFields() {
    var nameDivs = getChilds('names');
    for (var i = 0; i <= nameDivs.length - 1; i++) {
        nameDivs[i].classList.remove('winner');
    }
    return nameDivs;
}
exports.clearFields = clearFields;
function chooseRandomStudent(list) {
    var nameDivs = clearFields();
    var randomName = Math.round(Math.random() * (list.length - 1));
    nameDivs[randomName].classList.add('winner');
}
exports.chooseRandomStudent = chooseRandomStudent;
function playMusic(path) {
    var music = new Audio(path);
    music.play();
}
exports.playMusic = playMusic;
