const router= require('express').Router();
let Product=require('../models/Products');

router.get('/products',(req, res)=>{
   Product.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err))
})

router.get('/products/:id', (req,res)=>{
    Product.findById(req.params.id)
      .then((data)=>res.json(data))
      .catch((err)=>res.status(400).json(err))
})

router.patch('/products/update/:id',(req, res)=>{
    Product.updateOne(
        {_id:req.params.id},
        {$set:{
            inCart:req.body.inCart
        }}
    )
    .then((data)=>res.json(data))
    .catch((err)=>res.status(400).json(err))
})

router.post('/products/add', (req, res)=>{
    console.log(req.body)
    //PARSING FROM BODY
    const title=req.body.title;
    const img=req.body.img
    const price=parseInt(req.body.price);
    const company=req.body.company;
    const info=req.body.info;
    const inCart=false;
    const count=1;
    const total=req.body.price;

    //CREATING OBJECT
    const newProduct=new Product({
        title,
        img,
        price,
        company,
        info,
        inCart,
        count,
        total
    })
    //SAVING THE OBJECT
    newProduct.save()
        .then(()=>res.json('Product Added'))
        .catch(err=>res.status(400).json(err));
})

module.exports=router;