let products=[];
const fs = require('fs')
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFromFile = (cb)=>{
    fs.readFile(p,(err,data)=>{
        if(err){
            cb([])
        }
        cb(JSON.parse(data))
    })
}

module.exports = class product{
    constructor(title,img,p,disc){
        this.title = title,
        this.img = img,
        this.price = p,
        this.disc = disc
    }
    save(){
        products=getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>console.log(err))
        })
        
    }
    static fetchAll(cb){
        getProductsFromFile(cb)
    }
}