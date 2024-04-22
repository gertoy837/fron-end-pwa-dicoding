try {
  sendMail();
} catch (error) {
  console.error(error);
  notifyUserOfError(error);
  reportErrorToService(error);
}

sendRequest()
  .then((response) => {
    // ...
  })
  .catch((error) => {
    console.log(error);
    notifyUserOfError(error);
    reportErrorToService(error);
  });
