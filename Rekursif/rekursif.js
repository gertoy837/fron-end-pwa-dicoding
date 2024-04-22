/**
 * Rekursif
 * 
 * Konsep selanjutnya yang ada di Functional Programming adalah rekursif. 
 * Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.
 */

const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

countDown(10);

const countDown1 = (start) => {
  console.log(start);
  if (start > 0) countDown1(start - 1);
};

countDown1(10);

/**
 * Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. 
 * Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat 
 * dan mengolah data structures seperti Tree dan Array.
 */