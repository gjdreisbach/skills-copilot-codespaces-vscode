// create a web server with express
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('This is a page of comments');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
