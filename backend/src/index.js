import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" })
import { app } from "./app.js";


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`*Server is running at port: ${process.env.PORT}`);

    })
    app.on("error", (error) => {
      console.log("ERROR!", error);
      throw error;
    })

  })
  .catch((error) => {
    console.log("MONGO DB Connection error", error);
  })

/*
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
  console.log("CONNECTED");
})

import express from "express";
const app = express();
; (async () => {
 try {


   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error", (error) => {
     console.log("ERROR!", error)
     throw error
   })
   app.listen(process.env.PATH, () => {
     console.log(`Server is lisning at port ${process.env.PATH}`)
   })
 } catch (error) {
   console.log("ERROR:", error)
   throw err
 }
})()
*/