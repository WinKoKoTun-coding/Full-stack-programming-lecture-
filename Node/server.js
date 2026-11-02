const express = require('express');
const app = express();
const mongoose = require('mongoose');
let mongo_URL = "mongodb+srv://admin:admin123@newmediadb.6h8grce.mongodb.net/?retryWrites=true&w=majority&appName=NewMediaDB";
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

  
mongoose.connect(mongo_URL).then(() => {
    console.log("DB is connected ....")
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
        })
    }).catch(err => {
      console.log("Database is error")
  })

// console.log(mongoose.connect(mongo_URL))