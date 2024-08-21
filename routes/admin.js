import e from "express";

import { adminRegistration, loadAdmRegistrationPage } from "../controllers/admin.js";

const router = e.Router();

router.get("/admin-registration", loadAdmRegistrationPage);
router.post("/admin-registration", adminRegistration);

export default router;