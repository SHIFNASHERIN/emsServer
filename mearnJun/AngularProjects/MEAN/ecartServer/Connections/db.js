const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL)
.then(()=>{
console.log("_____MongoDB Atlas Connected_____");
})
.catch(err=>{
console.log("MongoDB Not Connected "+err);
})
