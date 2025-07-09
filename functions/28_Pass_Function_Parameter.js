function sayHello(name) {
  return "Hello, " + name + "!";
}

function processUserInput(callback) {
  let name = "Alice";
  console.log(callback(name));
}

processUserInput(sayHello);