import express from 'express'
const app = express();
//C= create => POST (methode)
//R= Read => GET (methode)
//U= update =>PUT (methode)
//D= Delete => Delete (methode)

app.get ('./ikram',(req,res)=>{
  res.send("This is responce")
})

app.post ('./ikram_post',(req,res)=>{
  res.send("This is responce ikram")
})
const port = 2000;

app.listen (port,()=> console.log(`server is running on port ${port}`));