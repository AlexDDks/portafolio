const express = require('express');
const nodemon = require('nodemon');
const path = require('path');


const app = express()



const mainRouter = require('./routes/mainRouter')
const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.use('/', mainRouter)







// Para trabajar Nodemon debemos de instalar npm i - D nodemon
// y de ahí ir a scripts del package.json y dentro del
// script poner "start": "nodemon app.js", para ejecutar en terminarl
// escribimos npm start y con ello 




app.listen(3000, () => {
    console.log('Servidor corriendo')
})


