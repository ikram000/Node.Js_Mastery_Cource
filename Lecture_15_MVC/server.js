import express from "express"
import mongoose from "mongoose"
import { userRegister } from "./Controllers/user.js";

const app = express();
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://ikramjaved857_db_user:ikrammughal123@cluster0.zfcyrbn.mongodb.net/", {
    dbName: "NodeJs_Mastery_Course"
}).then(() => console.log("Mongodb connected..!")).catch((err) => console.log("err"))


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/form_submit',userRegister )
   

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`))