const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app! CRIADO AGORA e ALTERADO!!!')
});

app.listen(3000, () => {
  console.log('server started');
});
