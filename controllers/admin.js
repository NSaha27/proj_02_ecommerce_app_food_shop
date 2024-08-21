import bcrypt from "bcrypt";
import Admin from "../models/admin.js";

const loadAdmRegistrationPage = (req, res, next) => {
  res.render("regLogin/registration", {pageTitle: "Admin Registration", path: "/admin-registration", userType: "admin"});
};

const adminRegistration = async (req, res, next) => {
  const parsedRegData = req.body;
  try{
    const encryptedPassword = await bcrypt.hash(parsedRegData.password, 10);
    if(encryptedPassword){
      const newAdmin = new Admin(parsedRegData.name, parsedRegData.dob, parsedRegData.sex, parsedRegData.aadhar, parsedRegData.address, parsedRegData.phone, parsedRegData.email, encryptedPassword);
      const result = await newAdmin.save();
      if(result){
        res.redirect(`/admin-login/${result.insertedId}?msg=admin (ID: ${result.insertedId}) successfully registered, please log in now...`);
      }else{
        console.log("something went wrong, unable to add the admin...");
      }
    }
  }catch(e){
    console.log(e);
  }
};


export { adminRegistration, loadAdmRegistrationPage };
