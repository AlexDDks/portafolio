const express = require('express')
const path = require('path');


const app = express()



const mainRouter = require('./routes/mainRouter')



app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.use('/', mainRouter)














app.listen(3000, () => {
    console.log('Servidor corriendo')
})


