//Complete the necessary code in this file
import React from "react"
import Post from "./Post"
import "./Posts.css"

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log('Posts', props)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.dummyData.map((post, index) => {
        return (
          <div key={index}><Post post = {post} />
        </div>
        )
        
        })
      }      
    </div>
  )
}

export default PostsPage

