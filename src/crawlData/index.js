//cheerio
const express = require('express');
const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

request('https://vnexpress.net/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let newsTop = []
        $('.item-news').each((index, el) => {
            const title_news = $(el).find('.title-news a').text();
            const description = $(el).find('.description a').text()
            const urlIMG = $(el).find('.thumb-art a picture img').src;
            console.log( urlIMG)
            newsTop.push({
                title_news, description
            });
        });
        fs.writeFileSync('data.json', JSON.stringify(newsTop)); // lưu dữ liệu vào file data.json
    }
    else {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server listening port: ${port}`)
})