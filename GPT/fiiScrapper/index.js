const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://br.investing.com/equities/StocksFilter?index_id=179');

  const boxes = await page.$$('.tickerBox');
  for (let box of boxes) {
    const title = await box.$eval('.tickerBox__title', el => el.innerText.trim());
    const price = await box.$eval('.tickerBox__info__box > .price', el => el.innerText.trim());
    const change = await box.$eval('.tickerBox__info__box > .change', el => el.innerText.trim());
    console.log(title, price, change);
  }

  await browser.close();
})();