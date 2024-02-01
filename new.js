// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = "ACf76bded57f46773c000ffad822e56c99";
const authToken = "f822415e11ecb66755f130cf20d2c7b9";

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    to: "+15197099549",
    from: "+12512701067",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
  })
  .then((message) => console.log(message.sid));
