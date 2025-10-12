import express from 'express'
const app = express();

app.get('/', (req,res)=>{
    res.send("you are requested for home route")
})
 app.get('/ikram',(req,res)=>{
    res.send("welcome ikram server")
 })
const port = 2000;
app.listen(port, ()=> console.log(`welcome to express server ${port}`))