import User from "../model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserData from "../model/userData.model.js";
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).send('Error logging in');
  }
}

export const signupUser = async (req, res) => {
  console.log(req.body)
  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullname, username: email, email, password: hashedPassword });
    const userCreated = await user.save();
    if ('_id' in userCreated) {
      const token = jwt.sign({ userId: userCreated._id }, 'your_jwt_secret');
      const userData = await UserData.create({
        userId: userCreated._id, 
        tasks: [],
        lists: [],
        tags: []
      })
      return res.status(201).json({ token });
    }
  } catch (error) {
    return res.status(400).send('Error registering user');
  }
};