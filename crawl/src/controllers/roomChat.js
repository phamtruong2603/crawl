import Chat from "../models/chat.js";
import User from "../models/user.js";
import RoomChat from "../models/roomChat.js";
import user_roomchat from "../models/user_roomchat.js";
import { Op } from "sequelize";

export const roomChatController = {
    //create RoomChat
    createRoomChat: async (req, res) => {
        const { name, owner, member } = req.body;
        console.log(member)
        // const user = await User.findAll({ where: { id: member } });
        // const room = await RoomChat.findAll({ where: { id: member }, include: User })
        const room = await RoomChat.findOne({
            include: [{
                model: User,
                through: {},
                where: {
                    [Op.and]: [
                        { id: member[0] },
                        { id: member[1] }
                    ],
                }
            }]
        })

        console.log(room)
        // const room = await RoomChat.create({ name, owner })

        // user.forEach(async ur => {
        //     await room.addUser(ur, { through: user_roomchat });
        // });

    },
}
