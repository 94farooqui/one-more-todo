export const createTask = async (req,res) => {
    console.log("POST Requset received for Task")
    res.json({"body":req.body})
}

export const getAllTasks = async (req,res) => {
    console.log("GET Requset received for Task")
    res.json({"Action":"Get All"})
}

export const getTaskDetails = async (req,res) => {
    const {taskId} = req.params
    res.status(200).json({"taskId":taskId, "Action":"Get Details"})
}

export const updateTask = async (req,res) => {
    const {taskId} = req.params
    res.status(200).json({"taskId":taskId, "Action":"Updated"})
}
export const deleteTask= async (req,res) => {
    const {taskId} = req.params
    res.status(200).json({"taskId":taskId, "Action":"Deleted"})
}