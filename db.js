import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(
    'mongodb://localhost/my-tube', 
    {
        useNewUrlParser: true
    }
);

const handleError = (err) => console.log(err);
const handleOpen = () => console.log("Connection success");

const db = mongoose.connection;
db.on('error', handleError);
db.once('open', handleOpen);