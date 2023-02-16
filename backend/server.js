const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();

app.use = express;
app.use = cors;

//db connection 

//connection open



//port checking 
app.listen(process.env.PORT,()=>{
    console.log(`Server listning port: ${process.env.PORT}`);
})
