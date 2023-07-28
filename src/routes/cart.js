const express=require("express")
const router=express.Router();

const cartMid=(req,res,next)=>{
    if(req.body.password=="email@123"){
        next();
        }
        else{
            res.send("LOGING NOT SUCCESFULL");
        }
}


router.post("/Login",cartMid , 
 (req,res) => {
    
     
    res.send("Login succesfull");
})





module.exports=router;