import { Configuration, OpenAIApi } from 'openai';
import config from '../configs/config';

const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ChatAI = {
    POSTChat: async (req, res) => {
        try {
            const { prompt } = req.body;

            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `${prompt}`,
                temperature: 0,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            });

            res.status(200).send({
                bot: response.data.choices[0].text
            });

        } catch (error) {
            console.error(error)
            res.status(500).send(error || 'Something went wrong');
        }
    },
    ChatGET: async (req, res) => {

    }
}

export default ChatAI;