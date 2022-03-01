function sayHelloAsync() {
  setTimeout(() => {
  	printMessage("Hello")
	}, 50000)
  printMessage("world")
}

function printMessage(message) {
	console.log(message);
}

setTimeout(() => {
  printMessage("Soy Asíncrono")
}, 0)

printMessage(sayHelloAsync())
