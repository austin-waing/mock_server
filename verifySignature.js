const crypto = require("crypto");

const verifySignature = (incomingSignature, payload, secretKey) => {
  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(JSON.stringify(payload))
    .digest("base64");

  return signature === incomingSignature;
};

module.exports = {
  verifySignature,
};
