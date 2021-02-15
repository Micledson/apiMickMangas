const axios = require("axios");
const cheerio = require("cheerio");

async function searchManga(req, res) {
  const { manga } = req.params;
  const url = `https://mangahostz.com/find/${manga}`;
  var message = "";
  const mangas = await axios(url)
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
        message = "entrou aqui";
      });
      return mangaList;
    })
    .catch(console.error);

  return res.json({ message_do_servidor: message });
}

module.exports = {
  searchManga,
};
