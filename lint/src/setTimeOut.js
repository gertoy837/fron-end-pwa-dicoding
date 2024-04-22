const sayHello = "Hello World!";
const MILLISECONDS_IN_A_DAY = 3_000;

setTimeout(() => {
  console.log(sayHello);
}, MILLISECONDS_IN_A_DAY);


// default argument

const createMicrobrewery = (name = "Hipster Brew Co.") => {
  console.log(name);
};



createMicrobrewery('agus');
createMicrobrewery();
