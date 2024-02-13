const express = require("express");
const router = express.Router();
import { handleSubmit } from "../components/footer";

router.post("/submit-form", handleSubmit);

module.exports = router;
