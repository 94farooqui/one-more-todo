import express from 'express'

const router = express.Router({ mergeParams: true })

router.get("/", (req,res) => {
    console.log("Requset received for Sub Task")
    const { taskId } = req.params;
    console.log(req.params)
    res.json({"msg":`Hello World, from the Sub Task ${taskId}`})
})

router.post("/", (req,res) => {
    const { taskId } = req.params;
    console.log("POST Requset received for Task")
    res.json({"body":req.body, "taskid":taskId})
})

export default router