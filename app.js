import bodyParser from "body-parser";
import e from "express";
import path from "path";

import { mongoConnect } from "./config/database.js";
import adminRouter from "./routes/admin.js";
import shopRouter from "./routes/shop.js";

// host & port info
const HOST = "127.0.0.1";
const PORT = process.env.PORT || "3000";

const app = e();

// app settings
app.set("view engine", "ejs");
app.set("views", "views");

// important middlewares
app.use(e.static(path.join(process.cwd(), "public")));
app.use(bodyParser.urlencoded({extended: false}));

// other middlewares
app.use(shopRouter);
app.use(adminRouter);

mongoConnect(client => {
  try{
    const db = client.db("food-shop-db");
    db.createCollection("admin")
    .then(result => {
      if(!result){
        throw new Error("something went wrong, unable to create the admin collection...");
      }
      console.log("admin collection successfully created...");
      app.listen(PORT, HOST, error => {
        if(!error){
          console.log(`server started at http://${HOST}:${PORT}`);
        }else{
          console.log("something went wrong, unable to start the server...");
        }
      });
    })
    .catch(error => {
      console.log(error);
      return;
    })
  }catch(e){
    console.log(e);
  }
});