const express = require("express")
const app = express()
const connectDB = require('./src/providers/database.js')
const task = require('./src/routes/task.js')
const auth = require('./src/routes/auth.js')
const dotenv = require('dotenv').config();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json())

//connect dbs
connectDB('task')

//routes 

app.use('/tasks',task),
app.use('/auth',auth)

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})
