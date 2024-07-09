import jwt from 'jsonwebtoken'
import User from '../model/user.model.js';
import UserData from './../model/userData.model.js'

export const getUserData = async (req,res) => {
  const user = req.user.userId
  const foundUser = await User.findById(user)
  const data = await UserData.findOne({userId:user}).populate('tasks')
  console.log(data)
  res.status(200).json(data)
}

export const createUser = async (req, res) => {
    console.log("POST Requset received for Task");
    if (!req.body) {
      res.status(400).json({ error: "Bad request" });
    }
    try {
      const newTask = new Task(req.body);
      const result = await newTask.save();
      if ("_id" in result) {
        console.log(result);
        res.status(200).json({ message: "Task added" });
      }
    } catch (error) {
      res.status(400).json({ error: "Bad request" });
    }
  };
  
  export const getAllUsers = async (req, res) => {
    console.log("GET Requset received for Task");
    res.json({ Action: "Get All" });
  };
  
  export const getUserDetails = async (req, res) => {
    const { token } = req.params;
    const decoded = jwt.verify(token, 'your_jwt_secret')
    const user = await User.findById(decoded.userId)

    if(!user){
      return res.status(404).send("User not found ")
    }
    return res.status(200).json({ user});
  };
  
  export const updateUser = async (req, res) => {
    const { taskId } = req.params;
    const updatedData = req.body;
  
    console.log(`PUT request received for task ${taskId}`);
    try {
      let updatedTask = await Task.findOneAndUpdate(
        { _id: taskId },
        updatedData,
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(400).json({ error: "Bad Request, task not found" });
      }
  
      return res.status(200).json({ msg: "Updated Successfully" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Bad Request, error in fetching data", error: error });
    }
  
    // res.status(200).json({"taskId":taskId, "Action":"Updated"})
  };
  export const deleteUser = async (req, res) => {
    const { taskId } = req.params;
  
    console.log(`DELETE request received for task ${taskId}`);
    try {
      let deletedTask = await Task.findOneAndDelete({ _id: taskId });
  
      if (!deletedTask) {
        return res.status(400).json({ error: "Bad Request, task not found" });
      }
  
      return res.status(200).json({ msg: "Deleted Successfully" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Bad Request, error in fetching data", error: error });
    }
  };