import puppeteer from 'puppeteer';

const StartBrowser = async () => {
    const url = 'https://vnexpress.net/tin-tuc-24h'
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-setuid-sandbox'],
        ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();
    await page.goto(url, { timeout: 0 });

    //chắc chắn trang sẽ tải vào một lúc nào đó
    await page.setDefaultNavigationTimeout(0);
    try {
        const articles = await page.evaluate(() => {
            const titles = document.getElementsByClassName('item-news item-news-common');
            const arrTitle = [];
            for (const title of titles) {
                arrTitle.push({
                    title: title.getElementsByTagName('h3')[0] ? title.querySelectorAll('h3 > a')[0].outerText : '',
                    description: title.getElementsByTagName('p')[0] ? title.getElementsByTagName('p')[0].outerText : '',
                    href: title.querySelectorAll('h3')[0] ? title.querySelectorAll('h3 > a')[0].href : '',
                    img: title.querySelectorAll('div > a > picture > img')[0] ? title.querySelectorAll('div > a > picture > img')[0].src : ''
                });
            }
            return arrTitle;
        });
        console.log(articles);
    } catch (err) {
        console.error(err);
    }
    browser.close();
};
StartBrowser()
export default StartBrowser
