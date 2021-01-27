"use strict";
exports.__esModule = true;
var lists_1 = require("../commonTS/lists");
var functions_1 = require("../commonTS/functions");
window.addEventListener('load', function () { return functions_1.generateFields(lists_1.b7); });
var button = document.getElementById('chooseStudent');
button.onclick = function () {
    var inter = setInterval(function () { return functions_1.chooseRandomStudent(lists_1.b7); }, 50);
    functions_1.playMusic('../resources/ticking.mp3');
    setTimeout(function () {
        clearInterval(inter);
        functions_1.playMusic('../resources/Bomb+2.mp3');
    }, 5000);
};
