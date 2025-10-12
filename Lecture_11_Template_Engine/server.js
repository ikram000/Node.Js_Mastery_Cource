import express from 'express'

const app=express();

 const product = [
    { title: 'iphone-17', price: 650000 },
    { title: 'iphone-15', price: 350000 },
    { title: 'iphone-12', price: 250000 },
    { title: 'iphone-11', price: 150000 }
]

app.get('/', (req,res)=>{
    let name = "ikram"
    res.render("index.ejs",{name,product})
})


const port = 1000;
app.listen (port, ()=> console.log(`server is running on port ${port}`))