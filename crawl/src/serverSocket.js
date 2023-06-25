import { Server } from "socket.io";

let usersOnSocket = [];

const addUser = (userID, socketID) => {
    usersOnSocket = usersOnSocket.filter((ur) => {
        return ur.userID !== userID;
    });

    usersOnSocket.push({ userID, socketID });
};

const checkUser = (userID) => {
    return usersOnSocket.find((ur) => ur.userID === userID);
};

const disConnectUser = (socketID) => {
    usersOnSocket = usersOnSocket.filter(user => user.socketID !== socketID);
};

export const serverSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['POST', 'GET', 'PUT', 'DELETE']
        }
    });

    io.on('connection', (socket) => {

        //user login and go online
        socket.on('newConnectUser', (data) => {
            addUser(data, socket.id);
        });

        // chat realtime
        socket.on('join_room', (data) => {
            socket.join(data);
        });
        socket.on('message', (data) => {
            io.to(data.room).emit('pushMessage', data);
        });

        // notification
        socket.on('notificationClientPush', (data) => {
            io.to(checkUser(data.userID)?.socketID || 'nn').emit('notificationServerPush', data);
        });

        // user log out and go offline
        socket.on('logOut', () => {
            disConnectUser(socket.id);
        });
        socket.on('disconnect', () => {
            disConnectUser(socket.id);
        });
    });

}