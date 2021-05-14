const mongoose= require('mongoose');



const DBuri= process.env.DATABASE;

mongoose.connect(DBuri, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() =>{
    console.log("connection Successful");
}).catch((err) => console.log(err));


