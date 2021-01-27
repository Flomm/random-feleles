"use strict";
exports.__esModule = true;
var lists_1 = require("../commonTS/lists");
var functions_1 = require("../commonTS/functions");
window.addEventListener('load', function () { return functions_1.generateFields(lists_1.b7); });
var button = document.getElementById('chooseStudent');
button.onclick = function () {
    functions_1.startApp(lists_1.b7);
};
