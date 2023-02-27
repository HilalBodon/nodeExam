const DB = require("./database").connectDB;

DB();
// to use json 

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});