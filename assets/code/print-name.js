const name = "Jon";

const lastname = "Snow";

function getFullname() {
  return name + lastname;
}

function sayHello() {
  return `Hello I'm ${getFullname()}`;
}

function printMessage(message) {
  console.log(message);
}

printMessage(sayHello())