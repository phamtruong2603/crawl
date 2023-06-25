import Chat from "../models/chat.js";
import User from "../models/user.js";

export const chatController = {
    //create chat 
    createChat: async (req, res) => {
        const { message, userId, roomChatId } = req.body
        const chat = await Chat.create({
            text: message,
            userId,
            roomChatId
        })

        if (!chat) {
            return res.status(400).json({
                success: false,
                message: 'fail!!!'
            });
        }

        return res.status(200).json({
            success: true,
            data: chat,
        });
    },

    getChat: async (req, res) => {
        const user = await Chat.findAll({
            include: [
                {
                    model: User,
                    as: 'user'
                }
            ]
        })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'fail!!!'
            });
        }

        return res.status(200).json({
            success: true,
            data: user,
        });
    }
}
