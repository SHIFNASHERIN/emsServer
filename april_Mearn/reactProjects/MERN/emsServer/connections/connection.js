const mongoose=require('mongoose')

mongoose.connect(process.env.base_url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("_______MogoDB Atlas Connected_______");
}).catch((error)=>{
    console.log("connection error ",error);
})