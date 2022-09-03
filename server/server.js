const express = require('express');
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

const app = express();


app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log("Server listening on port 5000"));
    })
    .catch(error => {
        console.log(error)
    })

