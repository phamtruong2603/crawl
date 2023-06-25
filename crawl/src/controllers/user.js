import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from "../configs/config.js";

export const userController = {
  //create user 
  createUser: async (req, res) => {
    const { usename, account, password, provider } = req.body;
    const userFind = await User.findOne({
      where: { account, provider }
    });
    if (userFind) {
      return res.status(400).json({
        success: false,
        code: 1001,
        message: 'phoneNumber already exists!!!',
        data: userFind
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: usename,
      account,
      provider,
      password: passwordHash
    })

    return res.status(200).json({
      success: true,
      code: 1000,
      message: 'create new account successfully',
      data: user,
    });
  },

  //login
  login: async (req, res) => {
    const { account, provider, password } = req.body;
    const user = await User.findOne({
      where: { account, provider }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        code: 1001,
        message: 'account is not registered!!!',
        data: null
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        code: 1001,
        message: 'wrong password!!!',
        data: null
      })
    }
    const token = jwt.sign({ id: user.id }, config.secretKey, {
      expiresIn: '1h'
    });

    return res.status(200).json({
      success: true,
      code: 1000,
      message: 'Logged in successfully!!!',
      data: user,
      token
    });
  },

  //getUser Token
  autoLoginWithToken: async (req, res) => {
    const id = req.id;
    const user = await User.findOne({
      where: { id }
    });
    if (!user)
      return res.status(404).json({
        success: false,
        code: 1001,
        message: 'user not exist :(',
        data: user,
      });

    return res.status(200).json({
      success: true,
      code: 1000,
      message: 'Logged in successfully!!!',
      data: user,
    });
  }
}

