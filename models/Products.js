const mongoose=require('mongoose')
const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:5,
        max:255,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:500,
        max:100000,
    },
    company:{
        type:String,
        required:true,
        max:30,
        min:2
    },
    info:{
        type:String,
        required:true,
        max:20,
        min:500
    },
    inCart:{
        type:Boolean,
        default:false,
        required:true,
    },
    count:{
        type:Number,
        required:true,
        max:5,
        min:1
    },
    total:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model('Products', productSchema)