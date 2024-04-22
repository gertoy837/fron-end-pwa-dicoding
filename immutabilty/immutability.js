const name = ["Harry", "ron", "Jeff", "Bob"];

const newNameWithExcMark = name.map((name) => `${name}!`);

console.log({
  name,
  newNameWithExcMark,
});

/**
 * Lantas, bagaimana bila kita benar-benar perlu mengubah nilai
 *  dari sebuah objek? Contohnya seperti ini:
 */

const user = {
  firstname: "Harry",
  lastname: "Protter",
};

const renameLastNameUser = (newLastName, user) => {
  user.lastname = newLastName;
};

renameLastNameUser("Potter", user);

console.log(user);

/**
 * Yup! Tujuan Anda memang tercapai namun itu bukanlah konsep dari paradigma FP.
 * Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas.
 * Lantas bagaimana solusinya? Sama seperti fungsi array map(),
 * alih-alih mengubah nilai objek secara langsung,
 * terapkan perubahan tersebut pada nilai return dalam objek baru.
 */

const user1 = {
  firstname: "Harry",
  lastname: "Protter",
};

console.log(user1);

const createWithNewLastName = (newLastName, user1) => {
  return { ...user1, lastname: newLastName };
};

const newUser = createWithNewLastName("Potter", user1);

console.log(newUser);
