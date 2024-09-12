import mongoose from "mongoose";
import env from "dotenv";
env.config();

let URL = process.env.URL;

mongoose.connect(`${URL}/blogbase`)
    .then(() => {
        console.log("database connected successfully");
    })
    .catch(error => {
        console.log("there was some error connnecting database", error);

    })

const baseSchema = new mongoose.Schema({
    content: String,
    title: String,
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    },

    tags: [],
    category: String,
});

export default mongoose.model("blogbase", baseSchema);