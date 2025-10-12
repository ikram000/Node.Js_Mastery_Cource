import express from 'express'
import path from 'path'
const app = express();

const product = [
    { title: 'iphone-17', price: 650000 },
    { title: 'iphone-15', price: 350000 },
    { title: 'iphone-12', price: 250000 },
    { title: 'iphone-11', price: 150000 }
]
// send responce
app.get('/', (req, res) => {
    // res.json({
    //     message: "fetch all products",
    //     product: product,
    //     sucess: true
    // });
    //  res.send('<h1>This is your responce</h1>')
    const dir = path.resolve();
    // console.log("my path = ",dir)

    const url = path.join (dir ,'./index.html')
    console.log ("full path =" , url)
    
    const name = 'ikram' // i dont show this in html file because using template engine
    res.sendFile(url)
});





const port = 1000;

app.listen(port, () => console.log(`server is running on port ${port}`));