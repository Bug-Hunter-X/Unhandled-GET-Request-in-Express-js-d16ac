const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This line is missing a call to res.send() or res.json()
  console.log('Request received');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});