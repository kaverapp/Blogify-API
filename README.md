📝 Blogging Platform API
A lightweight and efficient RESTful API for managing blog posts, built with Node.js, Express.js, and MongoDB.

🚀 Features
Create a new blog post
Update an existing blog post
Retrieve a single blog post by ID
Retrieve all blog posts
Delete a blog post
🛠️ Installation
1️⃣ Clone the Repository

git clone https://github.com/kaverapp/BLOGGING-PLATFORM-API.git
cd BLOGGING-PLATFORM-API

2️⃣ Install Dependencies

```bash
bun install
```

To run:

```bash
bun run index.js
```

3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
4️⃣ Start the Server

bun run index.js
The server will run on http://localhost:3000.

📌 API Endpoints
1️⃣ Create a Blog Post
```bash
POST /create
{
  "title": "My First Blog",
  "content": "This is my first blog post.",
  "tags": ["tech", "coding"],
  "category": "Technology"
}
```
✅ Response
```bash

{
  "msg": "success",
  "create": { "id": "abc123", "title": "My First Blog", ... }
}
```
2️⃣ Update a Blog Post
POST /update
```bash

{
  "id": "abc123",
  "title": "Updated Title",
  "content": "Updated blog content."
}
```
✅ Response
```bash

{
  "msg": "updated successfully",
  "updated": { "id": "abc123", "title": "Updated Title", ... }
}
```
3️⃣ Get a Blog Post by ID
GET /getOne
```bash

{
  "id": "abc123"
}
✅ Response

{
  "msg": "success getting data",
  "getData": { "id": "abc123", "title": "My First Blog", ... }
}
```

4️⃣ Get All Blog Posts
POST /getAll
```bash

✅ Response

{
  "msg": "success getting data",
  "getData": [{ "id": "abc123", "title": "My First Blog", ... }, { "id": "xyz456", "title": "Another Blog", ... }]
}
```
5️⃣ Delete a Blog Post

POST /delete
```bash

{
  "id": "abc123"
}
```
✅ Response
```bash

{
  "msg": "successfully deleted"
}
```

📌 Technologies Used
Node.js – Backend runtime
Express.js – Web framework
MongoDB – Database
Mongoose – ODM for MongoDB
dotenv – Environment variable management
📌 Contributing
Feel free to fork this repository, create a new branch, and submit a pull request with improvements! 🚀

📌 License
This project is licensed under the MIT License.



This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
https://roadmap.sh/projects/blogging-platform-api

🌟 Happy Coding! 🚀
