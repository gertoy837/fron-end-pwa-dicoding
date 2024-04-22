const createMenu = ({ title, body, buttonType, cancellable }) => {
  const title = title;
  const body = body;
  const buttonType = buttonType;
  const cancellable = cancellable;
};

createMenu({
  title: "Menu",
  body: "This is the menu",
  buttonType: "submit",
  cancellable: true,
});

// code so bad
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// code so goog

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

// bad

const addToDate = (date, month) => {
  // ....
};

const datee = new Date();
addToDate(datee, 1);

//   good

const addMonthToDate = (month, date) => {
  // ...
};

const date = new Date();
addMonthToDate(1, date);
