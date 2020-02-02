import React from "react"

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" onClick={() => props.setLikeIt(props.likeIt + 1)}>
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
    <span>{props.likeIt} </span>
      likes</p>
    </div>
  )
}

export default LikeSection;
