import mongoose from "mongoose"

export const subtaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desription : {
        type: String,
        required: true
    },
    listname: {
        type: String,
        required: true
    },
    due_date : {
        type: Date,
        required: true
    },
    tag : {
        type: String,
        default : "no-tag"
    }
})

const Subtask = mongoose.model("Subtask",subtaskSchema)

export default Subtask