import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt='avatar' src={props.imgSrc} />
            </a>
            <div className="content">
                <a href="" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <small className="date">{props.timeAgo}</small>
                </div>
                <div classsName="text">{props.blogPost}</div>
            </div>
        </div>
    )
}

export default CommentDetail