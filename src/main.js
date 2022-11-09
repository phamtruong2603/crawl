const app = require('express')();
const puppeteer = require('puppeteer');
const PORT = 3001;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://vnexpress.net/tin-tuc-24h');

  try {
    const articles = await page.evaluate(() => {
      const titles = document.getElementsByClassName('item-news item-news-common');
      const arrTitle = [];

      for (const title of titles) {
        arrTitle.push({
          h3: title.getElementsByTagName('h3')[0] ? title.getElementsByTagName('h3')[0].textContent : '',
          p: title.getElementsByTagName('p')[0] ? title.getElementsByTagName('p')[0].textContent : ''
        });
      }
      return arrTitle;
    });

    console.log(articles);
  } catch (err) {
    console.error(err);
  }
  browser.close();
})();

app.listen(PORT, () => console.info(`server run on port ${PORT}`));
