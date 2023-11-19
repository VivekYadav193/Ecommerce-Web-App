const mongoose=require("mongoose");


const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI,{}).then((data)=>{
        
        console.log(" Mongodb connected ");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connectDatabase ;