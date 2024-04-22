// array map

/**
 * Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
 * 
 * Ex = ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });
 * Callback function tersebut akan dipanggil sebanyak jumlah panjang array 
 * dan akan memiliki akses pada index array sesuai dengan iterasinya.
 * 
 * Ex = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
 * Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. 
 * Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya. 
 * Karena callback function dapat mengakses item array, 
 * biasanya developer menggunakannya untuk menghasilkan nilai baru. 
 */ 

const newArray = ['Harry', 'Juki', 'Samsul', 'Adit'].map((name) => { return `${name}!`});

console.log(newArray);


// array filter

/**
 * Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data 
 * yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk 
 * melakukan proses penyaringan (filtering) terhadap nilai array yang ada.
 * Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item 
 * di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini 
harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan 
apakah item array lolos saring atau tidak.

Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang 
telah disaring dalam bentuk array baru.

Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array: 
 */ 

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);