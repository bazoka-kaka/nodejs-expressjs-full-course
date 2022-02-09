//modules
const names = require(__dirname + "/4-names.js");
const sayHi = require(__dirname + "/5-utils.js");
const data = require(__dirname + "/6-alternate.js");
require(__dirname + "/7-mind-grenade.js");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
