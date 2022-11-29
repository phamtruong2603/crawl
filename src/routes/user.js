import express from "express";

const userRoute = express.Router();

userRoute.get('/user', (req, res) => {
    res.send('hello Cao Anh Huy')
})

export default userRoute