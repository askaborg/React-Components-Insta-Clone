//Complete the necessary code in this file
import React from "react"
import Post from "./Post"
import "./Posts.css"

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.dummyData.map((postIt, index) => <div key={index}> <Post post={postIt} /></div>)}
      }      
    </div>
  )
}

export default PostsPage

