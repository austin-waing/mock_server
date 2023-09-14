# Mock Server

This is a mock server for handling webhook requests.

## Prerequisites

- Node
- NPM

## Installation

Install the dependencies.

```
npm install
```

Run the server.

```
node server.js
```

## Handling public requests

If you need the mock server to be publicly accessible, you can create a tunnel such as `ngrok` and point it to the port of mock server.

To expose a public url with ngrok, run the following command.

```
ngrok http 5000
```

And you can use the public url provided by ngrok to access the mock server.
