import exoress from "express";
import { isAuth } from "../middleware/auth.js";
import uploadFile from "../middleware/multer.js";
import { createCompany, deleteCompany } from "../controllers/job.js";

const router =exoress.Router();

router.post("/company/new",isAuth,uploadFile,createCompany);
router.post("/company/:companyId",isAuth,deleteCompany);

export default router;