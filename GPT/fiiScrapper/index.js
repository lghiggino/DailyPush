const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fiis.com.br/lista-de-fundos-imobiliarios/');

  const boxes = await page.$$('.tickerBox');
  for (let box of boxes) {
    const title = await box.$eval('.tickerBox__title', el => el.innerText.trim());
    const dividendYield = await box.$eval('.tickerBox__info__box', el => el.innerText.trim());
    console.log(title, dividendYield);
  }

  await browser.close();
})();