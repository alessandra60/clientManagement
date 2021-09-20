const express= require ('express');
const cors= require ('cors');
const mongoose=require('mongoose');

const uri=process.env.ATLAS_URI;

//Env
require ('dotenv').config();


//Express
const app= express();
const port=process.env.PORT || 5000;


//Midlleware
app.use(cors());
app.use(express.json());


//Database

mongoose.connect("mongodb://127.0.0.1:27017/clientManagement", { useNewUrlParser: true, useUnifiedTopology:true});
const connection=mongoose.connection;
connection.on('error', console.error.bind(console, 'Connection Error: '));
connection.once('open',()=>{
    console.log("MongoDb database connection established successfully");
});

//Routes

const usersRouter=require ('./routes/users');
app.use('/users', usersRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});