import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userDataSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
    lists: [String],
    tags: [String]
})

const UserData = mongoose.model("UserData", userDataSchema)

export default UserData