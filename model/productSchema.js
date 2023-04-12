const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    files:[Object]
},{timestamps:{createdAt:"createdDate",updatedAt:"updatedDate"}})

const ProductSchema = mongoose.model('products',productSchema)

module.exports = {ProductSchema}