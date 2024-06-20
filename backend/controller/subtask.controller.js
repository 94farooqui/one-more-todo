import Task from "../model/task.model.js";

export const getAllSubtasks = async (req, res) => {
  const { taskId } = req.params;
  console.log(`GET Requset received for Sub Tasks for the task ${taskId}`);

  try {
    const foundTask = await Task.findOne({ _id: taskId }).populate("subtasks");

    if (!foundTask) {
      return res.status(400).json({ error: "Bad Request" });
    }

    if (!foundTask.subtasks.length > 0) {
      return res
        .status(200)
        .json({ count: foundTask.length, message: "No subtasks found" });
    }

    return res
      .status(200)
      .json({ count: foundTask.length, tasks: foundTask.subtasks });
  } catch (error) {
    return res.status(400).json({ error: "Bad Request" });
  }
};

export const createSubtask = async (req, res) => {
  const { taskId } = req.params;
  console.log(`POST Requset received for subtask, on Task ${taskId}`);

  try {
    const foundTask = await Task.findOne({ _id: taskId });

    if (!foundTask) {
      return res.status(400).json({ error: "Bad Request" });
    }

    if (!req.body) {
      return res.status(400).json({ error: "Bad request" });
    }
    try {
      const newTask = new Task(req.body);
      const result = await newTask.save();
      if ("_id" in result) {
        console.log(result);
        foundTask.subtasks.push(result._id);
        const updatedSubtasks = await foundTask.save();
        return res.status(200).json({ message: "Subtask added" });
      }
    } catch (error) {
        return res.status(400).json({ error: "Bad request" });
    }

    // if (!foundTask.subtasks.length > 0) {
    //   return res
    //     .status(200)
    //     .json({ count: foundTask.length, message: "No subtasks found" });
    // }

    // return res
    //   .status(200)
    //   .json({ count: foundTask.length, tasks: foundTask.subtasks });
  } catch (error) {
    return res.status(400).json({ error: "Bad Request" });
  }
};
