import { MongoClient } from "mongodb";

let _db;

// connection url
const url = "mongodb+srv://m001-student:NiladriSaha92@sandbox.ifgzp.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox";

// database
const db = "food-shop-db";

const mongoConnect = (cb) => {
  const newClient = new MongoClient(url);
  newClient.connect()
  .then(client => {
    if(!client){
      throw new Error("connection with the database failed...");
    }
    console.log("connection with the database established...");
    _db = client.db(db);
    cb(client);
  })
  .catch(error => {
    console.log(error);
    return;
  })
};

const getDBInstance = () => {
  return _db;
};


export { getDBInstance, mongoConnect };

