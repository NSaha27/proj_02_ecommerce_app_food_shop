import { getDBInstance } from "../config/database.js";

class Admin{
  constructor(name, dob, sex, aadhar, address, phone, email, password){
    this.admName = name;
    this.admDOB = dob;
    this.admSex = sex;
    this.admAadhar = aadhar;
    this.admAddress = address;
    this.admPhone = phone;
    this.admEmail = email;
    this.admPassword = password;
  }
  save(){
    const db = getDBInstance();
    return db.collection("admin").insertOne(this);
  }
}


export default Admin;