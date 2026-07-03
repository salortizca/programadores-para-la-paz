const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente y merequetengue ');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});