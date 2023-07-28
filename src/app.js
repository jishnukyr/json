const express = require("express")
const dotenv =require("dotenv")
dotenv.config();
const app = express();
app.use(express.json())


const AuthRoute=require("./routes/auth")
app.use("/api",AuthRoute);


const CartRoute=require("./routes/cart")
app.use("/ap",CartRoute);

app.get("/",(req,res)=>{
    res.send("Home");
})
app.post("/Login/:id",(req,res)=>{
    console.log(req.params.id)
    const{email,password}=req.body;
    if(password=="email@123"){
    res.send("LOGING SUCCESFULL");
    }
    else{
        res.send("LOGING NOT SUCCESFULL");
    }
})
app.get("/Post",(req,res)=>{
    res.send("POST SUCCESFUL");
})
app.post("/register",(req,res)=>{
    res.send("register");
})
app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.send("signup done ");
})

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jishnu6753:RaWDs9zjk5ijaV3K@cluster0.inyjeni.mongodb.net/?retryWrites=true&w=majority").then(()=>
{
    console.log("Connected");
}).catch(err=>{
            console.log("Not Connected");
    }
)






app.listen(5000,()=>{
    console.log("server listening at port 5000");
});