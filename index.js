import app from './app';
import dotenv from "dotenv";
dotenv.config();
import "./db"


const port = process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`MYTUBE app listening at http://localhost:${port}`)
  })