const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// Should be after all routes in server entry file (Boilermaker > Express > Send Index HTML);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

const port = process.env.PORT || 8080; //this can be very useful if you deploy to Heroku.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
