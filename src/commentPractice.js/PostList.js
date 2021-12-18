import {comments, post} from './data'
import React, {useEffect, useState} from 'react'
import PostItem from './PostItems'
import CommentList from './CommentList'
const PostList = () =>{
    const [allPost, setAllPost] = useState([])
    const [allOther, setAllOther] = useState(['1','2','3'])
    useEffect(()=> {
        let postAndCommnt = post.map((eachPost) => {
            const obj = Object.assign({},eachPost, {openComment:false} )
            return {
                id:obj.id,
                post:obj,
                comments: comments.filter((ele)=> ele.postId ===eachPost.id ).map((com)=>{
                    return {
                        ...com
                    }
                })
            }
        })
        setAllPost(postAndCommnt)
    },[setAllPost])

    const showComment = (commentId) =>{
        // console.log(allPost)
        console.log(commentId)
        let sam = allPost.map((el)=> {
            if(el.id === commentId){
                el.post.openComment = !el.post.openComment
            }
            return el
        })
        allPost.post = [...sam]
        setAllPost([...allPost])
    }
    return(
        <>
            <h1>Posts And Comments</h1>
            <div>
                {allOther.map((e,i) => <CommentList title={e}/>)}
            </div>
            <div>
                {allPost.length > 0 ? 
                allPost.map((items)=> <PostItem vieComment= {showComment}
                key={items.id}  id={items.id} post={items.post} comment={items.comments}/>) : []}
            </div>
        </>
    )
}
export default PostList