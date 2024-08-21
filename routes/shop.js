import e from "express";

import loadHomePage from "../controllers/shop.js";

const router = e.Router();

router.get("/", loadHomePage);

export default router;