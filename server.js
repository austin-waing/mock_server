const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { verifySignature } = require("./verifySignature");

const assistantSecret = "";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const incomingSignature = req.headers["x-asap-signature"];

  const signatureVerified = verifySignature(
    incomingSignature,
    req.body,
    assistantSecret
  );

  console.log("headers", req.headers);
  console.log("signatureVerified", signatureVerified);
  console.log("body", req.body);
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.info("Server listening at 5000.");
});
