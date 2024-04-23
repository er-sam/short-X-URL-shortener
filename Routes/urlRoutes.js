const express = require("express");
const { generateNewShortUrl, getShortUrl, rediretTo } = require("../Controllers/urlController");
const router = express.Router()


router.post("/",generateNewShortUrl);
router.post('/:shortid',getShortUrl);
router.get('/home/:shortid',rediretTo);



module.exports = router;