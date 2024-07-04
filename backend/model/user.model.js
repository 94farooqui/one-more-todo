import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User