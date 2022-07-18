const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router.js');
const mongoose = require('mongoose');
const fs = require('fs')

const app = express();

mongoose.connect('mongodb+srv://ashim:12345@cluster0.9imsbfg.mongodb.net/?retryWrites=true',{
    useNewUrlParser:true
})

mongoose.connection
.once('open',()=>console.log('connected to database'))
.on('error',err=>console.log('Error with the database',err))

app.use(cors());
app.use(bodyParser.json());



app.use((req,res,next)=>{
    fs.writeFileSync('./routes/demo.txt','ashim')
    next();
})



app.use('/',router);

const PORT = process.env.PORT ||4000; 
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})



