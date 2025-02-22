
// console.log(process.env);

const { SHELL } = process.env; // Destructuring object

// console.log(SHELL);


const charcaters = ['Goku', 'Vegeta', 'Crilin', 'Trunks'];

const [, , , trunks] = charcaters; // Destructuring array

console.log(trunks);