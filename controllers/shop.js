const loadHomePage = (req, res, next) => {
  res.render("shop/index", {pageTitle: "Home Page", path: "/", userType: ""});
};


export default loadHomePage;