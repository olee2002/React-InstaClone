import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

import styled from 'styled-components'

const input = `@import("https://fonts.googleapis.com/css?family=Lato" rel="stylesheet");`

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: space-between;
font-family: 'Lato', sans-serif;
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
z-index:0;
`

const PostTop = styled.div`
display: flex;
align-items: center;
/* padding:10px; */

z-index:1;
width: 95vw;
max-width: 600px;


img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 8px;
}
p{
  padding-left: 5px;
  font-weight: bold;}
  `

const PostMiddle = styled.div`
display: block;
width: 600px;
z - index: 1;
img{

  width: 600px;

}
`

const PostBottom = styled.div`
width: 600px;
/* padding: 5px; */
align - text: center;

p{
  padding-left: 5px;
  font-weight: bold;}
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
        </PostBottom>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
       
      </PostContainer>
      </Container>
    )
  }
}

export default Post;