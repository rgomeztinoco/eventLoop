const name = "Jon";

const lastname = "Snow";

function sayHello() {
  return `Hello I'm ${name + lastname}`;
}

function printMessage(message) {
	console.log(message);
}

setTimeout(() => {
  printMessage("Soy Asíncrono")
}, 0)

printMessage(sayHello())
