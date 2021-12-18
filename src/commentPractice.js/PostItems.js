import React, { useEffect } from "react"
import CommentItem from './CommentItems'
import { openStyle, closeStyle } from "./PostItemStyle"
const PostItem = props => {
   
  const { body, userId, id, title, openComment } = props.post
//   console.log('rendering again', id)
  return (
      <div>
            <div  style={{marginBottom:'10px', borderColor:'grey', borderWidth:'2px', border:'solid', padding:'5px'}}>
                <p>Post By {userId} : {title}</p>
                <p>Title {title}</p>
                <p>{body} </p>
                <p><span style={{margin:'10px', color:'white', backgroundColor:'grey', padding:'5px'}}>{props.comment.length} Comment(s) </span><span><button onClick={() => props.vieComment(props.id)}>Open Comment</button></span></p>
            </div>
            <div style={openComment ? openStyle : closeStyle}>
                {props.comment.map((comment) => <CommentItem comment={comment} key={comment.id}/>)}
            </div>
      </div>

      
      
  )
}

export default PostItem