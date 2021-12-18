import React, { useEffect } from "react"

const CommentList = props => {
    console.log('Prop self render' + props.title)
  return (
        <div style={{color:'black', borderBottom:'solid', borderBottomWidth:'1px'}}>
            <p style={{color:'blue'}}>{props.title}</p>
        </div>
  )
}

export default CommentList