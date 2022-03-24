//common practice is to name this EventEmitter
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", function (name, id) {
  //do something here
  console.log(`Data received ${name}, ${id}`);
});

customEmitter.on("response", function () {
  //do something here
  console.log(`Some other logic here`);
});

customEmitter.emit("response", "Yehezkel", 20);
