const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const todoRouter = require('./routes/todoRouter');
const jsonParser = express.json()

app.use(jsonParser);
app.use(cors());
app.use('/todos', todoRouter);


async function main() {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/todoDb");
    app.listen(4000, ()=>{console.log('Server has been started')});
  } catch(err){
    console.log(err);
  }
  
}



main()


// CORS ПОЧИТАТЬ БИБЛИОТЕКА


// sudo systemctl start mongod
// sudo systemctl status mongod
// mongodb-compass