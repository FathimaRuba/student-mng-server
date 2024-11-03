const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTIONS

mongoose.connect(connectionString).then(res =>{
  console.log("Server Connected to MongoDB");
  
}).catch(err=>{
  console.log(err);
  
})