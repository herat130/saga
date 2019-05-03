const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (request, response) => {
  response.send([{ name: 'herat' }, { name: 'dhruv' }]).send(200);
});

app.listen(8000, () => {
  console.log('app is running on port' + 8000);
});