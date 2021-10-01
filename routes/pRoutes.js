const express = require ('express')
const app = express();
const routes= express.Router();
const product=require('../productos')
routes.get("/",(req,res)=>{
    console.log(product)
})
module.exports= routes