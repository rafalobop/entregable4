const express = require('express')
const router = express.Router()

let idCounter = 1
let productos = []

router.get('/', (req,res)=>{
    if(!productos.length){
        return res.json({
            msg:'No hay productos disponibles'
        })
    }
    return res.json({
        msg:'Productos encontrados',
        productos
    })
})
router.get('/:id', (req,res)=>{
    let id = req.params.id
    let product = productos.find((prod)=> prod.id == id)
    if(!product) return res.json({
        error: 'Producto no encontrado'
    })
    return res.json({
        msg:'Producto encontrado',
        product
    })
})
router.post('/', (req,res)=>{
    if(!req.body.title || !req.body.price || !req.body.thumbnail)return res.json({
        msg:'Debe ingresar los datos del producto'
    })
    let product = req.body
    product.id = idCounter++
    productos.push(product)
    return res.json({
        msg:'Producto agregado',
        productAdded:product
    })
})
router.put('/:id', (req,res)=>{
    if(!req.body.title || !req.body.price || !req.body.thumbnail)return res.json({
        msg:'Debe ingresar los datos del producto'
    })
    let id = req.params.id
    let product = productos.find((prod)=> prod.id == id)
    if(!product) return res.json({
        error: 'Producto no encontrado'

    })
    const {title, price, thumbnail} = req.body
    product.title = title
    product.price = price
    product.thumbnail = thumbnail

    return res.json({
        msg:'Producto agregado',
        productEdited:product
    })
})
router.delete('/:id', (req,res)=>{
    let id = req.params.id
    let product = productos.find((prod)=> prod.id == id)
    if(!product) return res.json({
        error: 'Producto no encontrado'
    })
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].id == id){
            productos.splice(i,1)
        }
        console.log(productos) 
    }
    return res.json({
        msg:'Producto eliminado correctamente'
    })
})

module.exports = router