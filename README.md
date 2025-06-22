# CSI_Assignment5
# 📝 Notes App API (CRUD with Node.js & MongoDB)

This is a backend application that allows users to perform **CRUD (Create, Read, Update, Delete)** operations on notes. It also includes **user authentication** using JWT tokens.

---

## ⚙️ Technologies Used

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT (jsonwebtoken)** – User authentication
- **bcrypt.js** – Password hashing
- **dotenv** – Environment variable management
- **CORS** – Cross-Origin support for frontend connection

---

## 💡 How It Works

1. **User registers and logs in**
   - Passwords are hashed using `bcrypt`
   - JWT token is generated and stored in `localStorage` (frontend)

2. **Authenticated users can:**
   - **Create** a new note
   - **Read** all notes
   - **Update** an existing note by ID
   - **Delete** a note by ID

3. **All note routes are protected** by JWT middleware.

---

