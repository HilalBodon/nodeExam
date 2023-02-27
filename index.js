const express = require("express");
const app = express();
const DB = require("./database").connectDB;

DB();
app.use(express.json());
app.use('/api/auth',authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});