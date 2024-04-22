// BAD
function sendNotification(payload) {
  const pushNotificationManager = new PushNotificationManager();
  const tokens = [];
  pushNotificationManager.getClients().forEach((client) => {
    tokens.push(client.token);
  });

  const payloadFormatter = new PayloadFormatter();
  const formattedPayload = payloadFormatter.format(payload);

  const notificationBuilder = new NotificationBuilder(
    formattedPayload,
    tokens
  ).build();
  notificationBuilder.sendNotification();
}

/**
 * Pada contoh kode di atas memang benar fungsi tersebut bertujuan
 * untuk mengirimkan notifikasi. Namun, berdasarkan kode yang dituliskan,
 * tingkatan abstraksinya tidaklah sama. Dengan begitu, pecahlah fungsi menjadi seperti ini.
 */

// GOOD
function tokenize() {
  const pushNotificationManager = new PushNotificationManager();
  const tokens = [];

  pushNotificationManager.getClients().forEach((client) => {
    tokens.push(client.token);
  });
  return tokens;
}

function formatPayload(payload) {
  const payloadFormatter = new PayloadFormatter();
  return payloadFormatter.format(payload);
}

function sendNotification(payload) {
  const tokens = tokenize();
  const formattedPayload = formatPayload(payload);
  const notificationBuilder = new NotificationBuilder(
    formattedPayload,
    tokens
  ).build();

  notificationBuilder.sendNotification();
}
