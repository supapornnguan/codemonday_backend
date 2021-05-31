
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes/teacher.route')(app);
require('./routes/course.route')(app);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(5000, () => {
  console.log('Start server at port 5000.')
})
