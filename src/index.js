const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

    //middleware
    app.use(express.json());
    app.use('/api', userRoutes);
    


//Routes
app.get('/', (req, res) =>{
    res.send('Welcome');
});

//mongodb connection
mongoose
    .connect("mongodb+srv://diego:Noentrasma$@cluster0.x6d80.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> console.log('Connected to Mongo Atlas'))
    .catch((error)=> console.error(error));

app.listen(9000, () => console.log('Server listening on port: ', port));

