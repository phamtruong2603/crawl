import { News } from "../entities/news.js";
import StartBrowser from "../crawlData/startBrowser.js";

const newsController = {
    createNews: async(req, res) => {

        const data = await StartBrowser();
        console.log(data)

        try {
            
        } catch (error) {
            console.error(error)
        }
    }
}

export default newsController
