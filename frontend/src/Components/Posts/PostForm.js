import { useState } from "react"

const PostForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // do some async stuff here
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What's on your mind?"/>
            <input type="submit"/>
        </form>
    )
}

export default PostForm