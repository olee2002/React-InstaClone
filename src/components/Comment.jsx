import React, {Component} from 'react';
import styled from 'styled-components'


const CommentContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
img{
  height: 20px;
  width: 20px;
  border-radius: 100%;
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