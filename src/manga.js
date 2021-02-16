const cheerio = require("cheerio");
const api = require("./services/api");

async function searchManga(req, res) {
  const { manga } = req.params;
  const url = `find/${manga}`;
  await api
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const search = $("tr");
      const mangaList = [];
      search.each(function () {
        const linkManga = $(this).find(".pull-left").attr("href");
        const mangaId = linkManga.split("/")[4];
        const nome = $(this).find(".pull-left").attr("title");
        const capa = $(this).find(".manga").attr("src");

        mangaList.push({ linkManga, mangaId, nome, capa });
      });
      return res.json({ mangaList });
    })
    .catch(console.error);
}

module.exports = {
  searchManga,
};
