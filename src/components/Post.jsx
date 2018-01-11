import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

import styled from 'styled-components'

const Container=styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: space-between;

background: rgb(247, 247, 247);
width: 100vw;
height:100vh;
z-index:-999;
`
const PostContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
/* flex-wrap:wrap; */
/* height:890px; */
width:600px;
margin: 20px auto;
display: block;
border-radius: 3px;
border: 1px solid #e6e6e6;
background: rgb(250, 250, 250);
font-family: "Open Sans";
z-index:0;
`

const PostTop = styled.div`
display: flex;
align-items: center;
/* padding:10px; */
font-family: "Open Sans";
z-index:1;
width: 95vw;
max-width: 600px;


img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 8px;
}
`

const PostMiddle = styled.div`
display: block;
width:600px;
z-index:1;
img{
 
  width: 600px;
  
}
`

const PostBottom = styled.div`
font-family: "Open Sans";
width:600px;
/* padding: 5px; */
align-text:center;
`



class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <Container>
      <PostContainer>
        <PostTop>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </PostTop>
        <PostMiddle>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </PostMiddle>
        <PostBottom>
          <FaHeartO />
          <FaCommentO />
         
         
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostBottom>
      </PostContainer>
      </Container>
    )
  }
}

export default Post;