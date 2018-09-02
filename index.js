const express = require('express');
const ip = require('ip');
const app = express();

app.get('/api/whoami', (req, res) => {
  res.send({
    ipaddress: ip.address(),
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));