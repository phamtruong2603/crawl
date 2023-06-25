import jwt from 'jsonwebtoken';
import config from '../configs/config.js';

const authVeryToken = (req, res, next) => {

  const header = req.headers.authorization;
  const token = header && header.split(" ")[1]

  if (!token)
    return res.status(400).json({
      success: false,
      code: 1001,
      message: "not JWT!!!",
      data: null
    })

  try {
    const decoded = jwt.verify(token, config.secretKey)
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      code: 1001,
      message: "Error verifying JWT!!!",
      data: null
    })
  }
};

export default authVeryToken;
