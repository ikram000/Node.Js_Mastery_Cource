import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb+srv://ikramjaved857_db_user:ikrammughal123@cluster0.zfcyrbn.mongodb.net/", {
    dbName: "NodeJs Mastery Course"
}).then(() => {
    console.log("Mongodb connected..!")
}).catch((err) => {
    console.log(err)
})
const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))