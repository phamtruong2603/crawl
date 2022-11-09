//Puppeteer
const express = require('express');
const puppeteer = require('puppeteer');

const startBrowser = require('./startBrowser')

const app = express();
const POST = 3001;

(async () => {
    let browser = await startBrowser()
    let url = 'https://vnexpress.net/tin-tuc-24h';
    try {
        let page = await browser.newPage();
        console.log(`Navigating to ${url}...`);
        await page.goto(url);
        // await page.screenshot({path: 'image.png'})

        const title_news = await page.evaluate(() => {
            return Array.from(
                document.querySelectorAll("#automation_TV0 > div > article")
            ).map((title, index) => {
                
            });
        })
        console.log(title_news)
    }
    catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
    browser.close()
})()

app.listen(POST, () => {
    console.log(`server run on port ${POST}`)
})