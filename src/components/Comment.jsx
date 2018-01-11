import React, {Component} from 'react';
import styled from 'styled-components'


const CommentContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-family: "Open Sans";
z-index:999;

img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 8px;
}
`


class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentContainer>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
          </CommentContainer>
    );
  }
}

export default Comment;