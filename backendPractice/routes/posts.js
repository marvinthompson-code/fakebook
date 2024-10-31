const posts = require("express").Router()

const { checkFirebaseToken } = require("../middleware/auth")

const { fetchAllPosts, fetchAllUserPosts, fetchSinglePost, addPost, deleteSinglePost } = require("../queries/posts")

posts.get("/", fetchAllPosts)
posts.get("/:id", fetchSinglePost)
posts.get("/user/:owner_id", fetchAllUserPosts)
posts.delete("/:id", deleteSinglePost)
posts.post("/", checkFirebaseToken, addPost)

module.exports = posts