import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
  console.log(req.header)
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('Access denied');
  }
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    console.log("token",token,"decoded",decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};


