const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const name = process.env.MY_NAME || 'Ioana';
  const city = process.env.MY_CITY || 'Poitiers';
  const language = process.env.MY_LANGUAGE || 'English';

  const message = `I am ${name}, wilder in ${city}, and I love ${language}.`;

  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
