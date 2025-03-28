const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Student = require('./models/student.model');
const studentRoutes = require('./routes/student.route');
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.error('Error connecting to MongoDB');
  });



//routes
app.use('/Student', studentRoutes);



app.get('/', (req, res) => {
  res.send('Hello!');
});



