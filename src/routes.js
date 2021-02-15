const express = require("express");

const manga = require("./manga");

const router = express.Router();

//searchManga
router.get("/search/:manga", manga.searchManga);
// router.get("/info/:mangaId", manga.infoManga);
// router.get("/cap/:mangaId/:capitulo", manga.capManga);

module.exports = router;
