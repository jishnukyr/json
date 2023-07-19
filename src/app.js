const express = require("express")
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home");
})
app.post("/Login",(req,res)=>{
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







app.listen(5000,()=>{
    console.log("server listening at port 5000");
});