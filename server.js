const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const rutasProductos = require('./src/routes/products')
const baseUrl = '/api/productos'

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(baseUrl, rutasProductos)
app.use(express.static(path.join(__dirname, 'src/public')))

app.listen(port, ()=>{
    console.log('app corriendo en puerto', port)
})

/*****************************
 Se que esto no va por aqui, pero no sabia donde mandarlo para no colocar 
 un Readme en el github.
 Dejo el curl de importacion para facilitar la prueba en postman
 **************************/

/*
curl --location --request POST 'localhost:8080/api/productos/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "lapizrojo",
    "price": 30,
    "thumbnail": "https://w7.pngwing.com/pngs/6/56/png-transparent-pencil-drawing-by-eraser-pencil-orange-by.png"
}'
 */