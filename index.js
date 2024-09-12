import express from "express";  // Import the Express.js framework for building web applications.
import env from "dotenv";       // Import dotenv to load environment variables from a .env file.

import blogBase from "./database/blogStore.js";  // Import the Mongoose model for interacting with the blog database.

env.config();  // Configure dotenv to load environment variables from the .env file.

const app = express();  // Create an instance of an Express application.
let PORT = process.env.PORT || 3000;  // Set the port number from the environment variable or default to 3000.

app.use(express.json());  // Use Express middleware to parse incoming JSON requests.

app.post("/create", async (req, res) => {  // Define a POST route for creating a new blog post.
    try {
        let { content, title, tags, category } = req.body;  // Destructure request body to extract blog details.
        const create = await blogBase.create({  // Create a new blog post in the database using Mongoose.
            content, title, tags, category
        });
        res.status(200).json({ msg: "success", create });  // Respond with success message and the created blog post.
    } catch (error) {
        res.status(400).json({ msg: "error" });  // Respond with error message if there's an issue creating the blog.

        console.log("some error cannot create ", error);  // Log the error for debugging.
    }
});

app.post("/update", async (req, res) => {  // Define a POST route for updating an existing blog post.
    try {
        let { id, content, title, tags, category } = req.body;  // Destructure request body to extract update details.

        const updated = await blogBase.findByIdAndUpdate(  // Update the blog post by its ID and return the updated version.
            id, { content, title, tags, category }, { new: true }
        );
        res.status(200).json({ msg: "updated successfully", updated });  // Respond with success message and updated post.
    } catch (error) {
        res.status(400).json({ msg: "error updating" });  // Respond with error message if there's an issue updating.

        console.log("some error cannot update ", error);  // Log the error for debugging.
    }
});

app.get("/getOne", async (req, res) => {  // Define a GET route for fetching a single blog post by its ID.
    try {
        let { id } = req.body;  // Extract the blog post ID from the request body.
        const getData = await blogBase.findById(id);  // Find the blog post in the database by its ID.

        res.status(200).json({ msg: "success getting data", getData });  // Respond with the blog post data.
    } catch (error) {
        res.status(400).json({ msg: "error getting data" });  // Respond with error message if there's an issue.

        console.log("some error cannot get ", error);  // Log the error for debugging.
    }
});

app.post("/getAll", async (req, res) => {  // Define a POST route for fetching all blog posts.
    try {
        const getData = await blogBase.find();  // Fetch all blog posts from the database.
        if (!getData) return "missing";  // Check if no data is found, and return a message if data is missing.

        res.status(200).json({ msg: "success getting data", getData });  // Respond with all blog post data.
    } catch (error) {
        res.status(400).json({ msg: "error getting data" });  // Respond with error message if there's an issue.

        console.log("some error cannot get ", error);  // Log the error for debugging.
    }
});

app.post("/delete", async (req, res) => {  // Define a POST route for deleting a blog post by its ID.
    try {
        let { id } = req.body;  // Extract the blog post ID from the request body.
        const delet = await blogBase.findByIdAndDelete(id);  // Delete the blog post by its ID.
        
        if (!delet) {  // Check if no blog post was found for deletion.
            console.log("no id found");
            res.status(401).json({ msg: "no id found" });  // Respond with a 401 error if the ID doesn't exist.
        } else {
            res.status(200).json({ msg: "successfully deleted" });  // Respond with success message if the post is deleted.
        }
    } catch (error) {
        res.status(400).json({ msg: "error deleting data" });  // Respond with error message if there's an issue deleting.

        console.log("some error cannot delete ", error);  // Log the error for debugging.
    }
});

app.listen(PORT, () => {  // Start the Express server and listen on the specified port.
    console.log("host is running on -->", PORT);  // Log a message indicating the server is running.
});
