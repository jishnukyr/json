const express=require("express")
const router=express.Router();

router.get("/Login",(req,res) => {
    res.send("req succesfull");
})





module.exports=router;