const express = require('express');
const app = express();
const pagesRouter = require('./routes/pagesRouter');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', pagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
