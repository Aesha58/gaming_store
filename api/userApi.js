const express = require("express");
const app = express();  
const {InsertUser, UpdateUser, DeleteUser, ViewUser, ViewOneUser } = require("../controllers/userController");

app.get("/", ViewUser);
app.get("/:id", ViewOneUser);
app.post("/", InsertUser);
app.put("/:id", UpdateUser);
app.delete("/:id", DeleteUser);

module.exports = app;