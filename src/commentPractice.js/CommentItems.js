import React, { useEffect } from "react"

const CommentItems = props => {
  const { name, email, body, id } = props.comment
  return (
        <div style={{color:'black', borderBottom:'solid', borderBottomWidth:'1px'}}>
            <p>Comment: {body}</p>
            <p style={{color:'blue'}}>By: {name} : <i >{email}</i></p>
        </div>
  )
}

export default CommentItems