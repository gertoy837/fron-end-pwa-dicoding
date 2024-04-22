// // Variabel pada cakupan global.
// let ingredients = 'tomat;cabai;bawang merah;bawang putih';

// const stringSplitter = (splitChar) => {
//     ingredients = ingredients.split(splitChar);
// }

// stringSplitter(';');

// // variabel ingredients berubah menjadi array
// console.log(ingredients);

// menjadikan pure function

// Variabel pada cakupan global.
const ingredients = 'tomat;cabai;bawang merah;bawang putih';
 
const stringSplitter = (splitChar, text) => text.split(splitChar);
 
const newIngredients = stringSplitter(';', ingredients);
 
console.log(ingredients); // tomat;cabai;bawang merah;bawang putih
console.log(newIngredients); // ['tomat', 'cabai', 'bawang merah', 'bawang putih']