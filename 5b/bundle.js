(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var lists_1 = require("../commonTS/lists");
var functions_1 = require("../commonTS/functions");
window.addEventListener('load', function () { return functions_1.generateFields(lists_1.b5); });
var button = document.getElementById('chooseStudent');
button.onclick = function () {
    functions_1.startApp(lists_1.b5);
};

},{"../commonTS/functions":2,"../commonTS/lists":3}],2:[function(require,module,exports){
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
var ticking = document.getElementById('tick');
var bomb = document.getElementById('bomb');
function startApp(nameList) {
    var inter = setInterval(function () { return chooseRandomStudent(nameList); }, 50);
    ticking.play();
    setTimeout(function () {
        clearInterval(inter);
        bomb.play();
    }, 5000);
}
exports.startApp = startApp;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.b8 = exports.b7 = exports.c6 = exports.b6 = exports.b5 = void 0;
var b5 = [
    'Biacsi Katalin',
    'Domonkos Bence',
    'Fábián Kornél',
    'Fábián Patrik Dominik',
    'Farkas Botond Vince',
    'Fodor Andrea Rita',
    'Grund Fanni',
    'Gyuricsek Réka Tímea',
    'Kneip Bálint Dániel',
    'Kovács Jázmin',
    'Kovács Kristóf Péter',
    'Makra Izabella',
    'Mazurák Márk',
    'Molnár Liliána',
    'Német Viktor',
    'Németh Dóra',
    'Nothof Abigél',
    'Nothof Bence',
    'Perneki Zsombor',
    'Széll Sebestyén',
    'Temesvári Regina',
    'Temesvári Szabolcs',
    'Telek Boglárka',
    'Tulman -Fischer Alex',
    'Vajna Eliza',
    'Zákány Barnabás',
];
exports.b5 = b5;
var b6 = [
    'Ambrus Petra',
    'Benke Krisztina',
    'Borsodi-Kalmár Gréta',
    'Böjti Maja',
    'Czabai Kira',
    'Csajkás Maja',
    'Gulyás Adél',
    'Gyurcsik Máté',
    'Hegyi László',
    'Horgos Dániel',
    'Juhász Milla',
    'Kecskés Dorottya',
    'Makra Mihály',
    'Moczó Csenge',
    'Molnár Dóra',
    'Nyerges Kata Hanna',
    'Nyilas Dániel',
    'Pataki Csenge',
    'Szalai Niraj Noel',
    'Temesvári Gábor',
    'Széll Bendegúz',
    'Tornyi Olivér',
    'Zakar Zsolna',
];
exports.b6 = b6;
var c6 = [
    'Balogh Edgár',
    'Becsek Enikő',
    'Belovai Nedda',
    'Boldizsár Réka',
    'Csányi Botond Ferenc',
    'Dancsik Antónia',
    'Felföldi Ádám',
    'Ficzere Hédi',
    'Füle Lilla',
    'Gargács-Acsai Gergő',
    'Herczeg Kincső',
    'Kabók Nelli Julianna',
    'Kertész Lívia',
    'Kovács Jázmin',
    'Mihály Brigitta',
    'Molnár Dorina',
    'Óvári Noémi',
    'Papdi Levente',
    'Sándor Máté',
    'Tóth István Mihály',
    'Várhelyi Levente',
    'Zsoldos Zoltán',
];
exports.c6 = c6;
var b7 = [
    'Ács Emese',
    'Bálint-Harmati Linett',
    'Berek Csaba',
    'Czentye Botond József',
    'Csiszér Barnabás',
    'Dékány Attila',
    'Erdélyi Balázs András',
    'Farkas Flóra Dóra',
    'Fodor Angelika',
    'Győrfi Gábor',
    'Kovács Tamás',
    'Kőházi Dalma Mira',
    'Miklós Milla',
    'Molnár Viktória Noémi',
    'Molnár Zengő',
    'Nagy Leonóra',
    'Nyerges Emese Anna',
    'Nyilas Réka Róza',
    'Perneki Dóra',
    'Szabó Boglárka',
    'Takács Máté',
    'Temkó Kata Kitti',
    'Tóth Tamás Ádám',
];
exports.b7 = b7;
var b8 = [
    'Bodó Lilla',
    'Csúri Zsuzsa',
    'Dudás Zsombor Zsolt',
    'Fábián Réka ',
    'Gubacsi Réka',
    'Izbéki Lőrinc',
    'Juhász Alex',
    'Juhász Olivér',
    'Kertész Mihály',
    'Kiss Gergő Attila',
    'Kiss Virág Fanni',
    'Kovács Martin Tamás',
    'Matovics Alex',
    'Matovics Ivett',
    'Moczó Gréta',
    'Molnár Csinszka',
    'Nagy Anna Sára',
    'Németh Sarolta',
    'Pataki Kolos',
    'Sárkány Kitti',
    'Süli Szilveszter',
    'Szőke Dominik Gergő',
    'Szutor Alex',
    'Teiszler Bence',
    'Teiszler Tamás',
    'Tóth Boglárka',
    'Tóth Fruzsina Réka',
    'Tóth Nimród',
    'Zakar Zsolt',
];
exports.b8 = b8;

},{}]},{},[1]);
